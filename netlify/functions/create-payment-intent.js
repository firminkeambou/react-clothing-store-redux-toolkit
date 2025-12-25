require('dotenv').config(); //common js syntax for loading environment variables from a .env file
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); //initialize stripe with secret key from environment variables
exports.handler = async function (event) {
  //amount used here should be calculated in cent ($10 = 1000 cents)
  try {
    const { amount } = JSON.parse(event.body);
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'usd',
      payment_method_types: ['card'],
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.log('Error creating payment intent:', error);
    return {
      statusCode: 400,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
