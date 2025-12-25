import { loadStripe } from '@stripe/stripe-js'; // this method runs to  initialize and Identify our instance of stripe

export const stripePromise = loadStripe(
  process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
); // we pass the publishable key to loadStripe method to initialize stripe instance
