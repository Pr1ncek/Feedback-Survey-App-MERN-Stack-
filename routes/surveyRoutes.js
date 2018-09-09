const mongoose = require('mongoose');

const verifyAuth = require('../middleware/verifyAuth');
const verifyCredits = require('../middleware/verifyCredits');
const Survey = mongoose.model('Survey');

module.exports = app => {
  app.post('/api/surveys', verifyAuth, verifyCredits, (req, res) => {
    const { recipients } = req.body;

    const newSurvey = new Survey({
      ...req.body,
      recipients: recipients.split(',').map(email => ({ email: email.trim() })),
      _user: req.user.id
    });
  });
};
