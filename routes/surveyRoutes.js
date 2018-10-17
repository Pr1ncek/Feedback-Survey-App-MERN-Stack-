const mongoose = require('mongoose');
const _ = require('lodash');
const Path = require('path-parser').default;
const { URL } = require('url');
const verifyAuth = require('../middleware/verifyAuth');
const verifyCredits = require('../middleware/verifyCredits');
const Survey = mongoose.model('Survey');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

module.exports = app => {
  app.get('/api/surveys/:surveyId/:choice', (req, res) => {
    res.send('Thank you. Your response has been saved.');
  });

  app.post('/api/surveys/webhooks', (req, res) => {
    const parser = new Path('/api/surveys/:surveyId/:choice');

    _.chain(req.body)
      .map(({ email, url }) => {
        const matched = parser.test(new URL(url).pathname);
        if (matched) return { ...matched, email };
      })
      .compact()
      .uniqBy('email', 'surveyId')
      .each(({ surveyId, email, choice }) => {
        Survey.updateOne(
          {
            _id: surveyId,
            recipients: { $elemMatch: { email, responded: false } }
          },
          {
            $inc: { [choice]: 1 },
            $set: { 'recipients.$.responded': true },
            $set: { lastResponded: new Date() }
          }
        ).exec();
      })
      .value();

    res.send({});
  });

  app.post('/api/surveys', verifyAuth, verifyCredits, async (req, res) => {
    const { recipients } = req.body;

    const newSurvey = new Survey({
      ...req.body,
      recipients: recipients
        .split(',')
        .map(email => ({ email: email.trim().toLowerCase() })),
      _user: req.user.id
    });

    const mailer = new Mailer(newSurvey, surveyTemplate(newSurvey));

    try {
      await mailer.send();
      await newSurvey.save();
      req.user.credits -= 1;
      const user = await req.user.save();
      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
