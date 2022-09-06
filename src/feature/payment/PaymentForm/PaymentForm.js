import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Button from '../../../components/Button';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Header from '../../../layout/Header/Header';
import Footer from '../../../layout/Footer/Footer';
import styles from './PaymentForm.module.css';

export default function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();

  const { currentUser } = getAuth();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const paymentHandler = async (e) => {
    e.preventDefault();

    //if user is not logged in, redirect to login
    if (currentUser === null) {
      navigate('/login');
    }

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: 30000 }),
    }).then((res) => res.json());

    console.log(response);

    const {
      paymentIntent: { client_secret },
    } = response;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser.email,
        },
      },
    });

    setLoading(false);

    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('payment successful');
      }
    }
  };

  return (
    <>
      <Header />
      <div className={styles.mainContainer}>
        <div className={styles.checkoutContainer}>
          <h1>Checkout</h1>
          <h2>Credit Card Payment :</h2>
          <form onSubmit={paymentHandler}>
            <CardElement />
            <Button type='submit' disabled={loading}>
              Pay Now
            </Button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
