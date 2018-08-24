import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payment extends Component {
  render() {
    return (
      <StripeCheckout
        name="Add Survey Credits"
        description="$5 for five credits"
        amount={500} // cents
        currency="USD"
        token={token => {
          console.log(token);
        }}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      />
    );
  }
}

export default Payment;
