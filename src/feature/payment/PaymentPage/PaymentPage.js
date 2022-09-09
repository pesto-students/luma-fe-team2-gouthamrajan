import React from 'react';
import Footer from '../../../layout/Footer/Footer';
import Header from '../../../layout/Header/Header';
import PaymentDetail from '../PaymentDetail/PaymentDetail';
import PaymentForm from '../PaymentForm/PaymentForm';
import styles from './PaymentPage.module.css';

export default function PaymentPage() {
  return (
    <>
      <Header />
      <div className='container'>
        <h1 className={styles.heading}>Booking Details</h1>
        <h2 style={{ fontWeight: 'var(--fw-bold)', fontSize: 'var(--fs-500)' }}>
          Total : &#8377;300
        </h2>

        <PaymentDetail />
        <div className={styles.paymentFormContainer}>
          <PaymentForm />
        </div>
      </div>
      <Footer />
    </>
  );
}
