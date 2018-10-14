const mongoose = require('mongoose');

const verifyAuth = require('../middleware/verifyAuth');
const verifyCredits = require('../middleware/verifyCredits');
const Survey = mongoose.model('Survey');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

module.exports = app => {
  app.get('/api/surveys/redirect', (req, res) => {
    res.send('Thank you. Your response has been saved.');
  });

  app.post('/api/surveys/webhooks', (req, res) => {
    console.log(req.body);
    res.send({});
  });

  app.post('/api/surveys', verifyAuth, verifyCredits, async (req, res) => {
    const { recipients } = req.body;

    const newSurvey = new Survey({
      ...req.body,
      recipients: recipients.split(',').map(email => ({ email: email.trim() })),
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
