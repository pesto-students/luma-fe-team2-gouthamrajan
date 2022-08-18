import React from 'react';
import { Button, Input } from '@mantine/core';
import Link from '../../../components/Link';
import styles from './ForgotPassword.module.css';
import { useNavigate } from 'react-router-dom';

export default function ForgotPassword() {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <h2>Forgotten your Password?</h2>
          <p>
            Don’t worry, we’ll send you a email to help you reset your password
          </p>
          <Input.Wrapper label='Email'>
            <Input placeholder='Enter your email' />
          </Input.Wrapper>

          <Button onClick={() => navigate('/confirm-code')}>Continue</Button>
        </div>
      </div>
    </>
  );
}
