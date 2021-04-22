import React from "react";
import "./stripe-button.styles.scss";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IitEOI9p3NfPMxUj4atFJNkJQBCBQaM1t72ZUYwC4kZpanzvAyB2PnUrMUTEgoO93PVm38r8zVqTBxqrCJBrv7d00uAJYtEy0";
  const onToken = (token) =>
    alert("This is a demo, not real money are charged");
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
