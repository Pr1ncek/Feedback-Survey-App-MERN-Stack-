const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = app => {
  app.post('/api/stripe', async (req, res) => {
    const response = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '$5 for five survey credits',
      source: req.body.id
    });
    console.log(response);
    res.json(response);
  });
};
