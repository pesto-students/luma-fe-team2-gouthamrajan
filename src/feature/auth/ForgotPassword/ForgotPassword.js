import React, { useState } from 'react';
import { Alert, Button } from '@mantine/core';
import Input from '../../../components/Input';
import styles from './ForgotPassword.module.css';
import { useAuth } from '../../../context/AuthContext';

export default function ForgotPassword() {
  const [email, setEmail] = useState();
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const { resetPassword } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await resetPassword(email);
      setMessage('Check your inbox for further instructions');
    } catch (error) {
      setError('Failed to reset password');
    }
    setLoading(false);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <h2>Forgotten your Password?</h2>
          <p>
            Don’t worry, we’ll send you a email to help you reset your password
          </p>
          <form onSubmit={handleSubmit}>
            {error && (
              <Alert color='red' variant='outline'>
                {error}
              </Alert>
            )}
            {message && (
              <Alert color='green' variant='outline'>
                {message}
              </Alert>
            )}
            <Input
              label='Email'
              placeholder='Enter your email'
              value={email}
              onChage={(e) => setEmail(e.target.value)}
            />
            <Button type='submit' disabled={loading}>
              Reset Password
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
