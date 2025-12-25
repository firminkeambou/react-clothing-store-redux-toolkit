import React from 'react';
//import { render } from 'react-dom';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
//importing stripe elements to proceed a payment
import {
  Elements, // Elements is a provider component that passes the Stripe object to the components that need it
} from '@stripe/react-stripe-js';

import App from './App';
import { store, persistor } from './redux/store/store';

import { stripePromise } from './utils/stripe/stripe.utils'; //related to payment processing, loading stripe application

import './index.scss';

//const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
