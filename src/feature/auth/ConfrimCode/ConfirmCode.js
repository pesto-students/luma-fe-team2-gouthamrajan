import React from 'react';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import styles from './ConfirmCode.module.css';

export default function ConfirmCode() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <h2>Let us know it’s you</h2>
          <p>Last step! To secure your accout, enter the code just sent you.</p>
          <Input label='Email' placeholder='Enter your email' />
          <Button>Continue</Button>
        </div>
      </div>
    </>
  );
}
