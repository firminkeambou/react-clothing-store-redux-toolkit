import { loadStripe } from '@stripe/stripe-js'; // this method runs to  initialize and Identify our instance of stripe

//the following promise wraps the App in index.js to provide stripe instance to the components that need it
export const stripePromise = loadStripe(
  process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
); // we pass the publishable key to loadStripe method to initialize stripe instance
