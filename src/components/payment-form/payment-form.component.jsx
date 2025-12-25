import React from 'react';
import { CardElement, useStripe,useElements } from '@stripe/react-stripe-js';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { PaymentFormContainer, FormContainer } from './payment-form.styles';

import './payment-form.styles';
const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    //payment processing logic will go here}
    };
  return (
    <PaymentFormContainer>
      <FormContainer>
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <br />
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay now</Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
