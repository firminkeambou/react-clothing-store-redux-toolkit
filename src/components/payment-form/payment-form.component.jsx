import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../redux/store/user/user.selector';
import { selectCartTotal } from '../../redux/store/cart/cart.selector';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { BUTTON_TYPE_CLASSES } from '../button/button.component';
import {
  PaymentFormContainer,
  FormContainer,
  PaymentButton,
} from './payment-form.styles';

import './payment-form.styles';
const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const currentUser = useSelector(selectCurrentUser);
  const amount = useSelector(selectCartTotal);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    //payment processing logic will go here}
    // this section only simulates a payment process without real backend integration, but using netlify serverless function, which means without netlify function this will not work as netlify serverless functions help us to simulate a backend environment

    // set processing state to true when payment starts
    setIsProcessingPayment(true);
    const response = await fetch('/.netlify/functions/create-payment-intent', {
      // remember: "functions/create-payment-intent" is the directory, then the name of the serverless function; the netlify serverless function endpoint
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: amount * 100 }), // "*100" because amount should be in cents, so this is $100
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response; // destructuring to get client_secret from response, off paymentIntent object, we get client_secret to confirm card payment
    //console.log('client secret:', client_secret); temporary
    //console.log('response from netlify function:', response);
    const cardDetails = elements.getElement(CardElement); // get card details from CardElement component as there is only one CardElement in the form
    if (cardDetails == null) {
      // if no card details, return
      alert('provide Card details to proceed');
      return;
    }
    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: cardDetails,
        billing_details: {
          name: currentUser ? currentUser.displayName : 'Guest', // use currentUser's displayName or 'Guest' if no user
        },
      },
    });

    // set processing state to false when payment is done
    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('Payment Successful!');
      }
    }
  };
  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        {/** any button by default in the form is a submit button */}
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <br />
        <PaymentButton
          type="submit"
          isLoading={isProcessingPayment}
          buttonType={BUTTON_TYPE_CLASSES.inverted}
        >
          Pay now
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
