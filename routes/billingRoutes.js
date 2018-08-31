const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

// Auth middleware
const verifyAuth = require('../middleware/verifyAuth');

module.exports = app => {
  app.post('/api/stripe', verifyAuth, async (req, res) => {
    const response = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '$5 for five survey credits',
      source: req.body.id
    });

    req.user.credits += 5;

    const updatedUser = await req.user.save();
    res.json(updatedUser);
  });
};
