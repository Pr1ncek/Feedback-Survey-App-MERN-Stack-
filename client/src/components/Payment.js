import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payment extends Component {
  render() {
    return (
      <StripeCheckout
        name="Add Survey Credits"
        description="$5 for five credits"
        amount={500} // cents
        currency="USD"
        token={token => {
          this.props.handleToken(token);
        }}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="teal btn-flat white-text">Add Credits</button>
      </StripeCheckout>
    );
  }
}

export default connect(
  null,
  actions
)(Payment);
