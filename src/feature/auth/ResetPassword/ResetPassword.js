import React, { useState } from 'react';
import { Alert } from '@mantine/core';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import styles from './ResetPassword.module.css';
import { useAuth } from '../../../context/AuthContext';
import Link from '../../../components/Link';

export default function ResetPassword() {
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
          <h2 className={styles.heading}>Reset your password</h2>
          <p>
            Don’t worry, we’ll send you a email to help you reset your password
          </p>
          <form onSubmit={handleSubmit} className={styles.form}>
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
              type='email'
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ paddingBlockEnd: '1em' }}
              required
            />
            <Button type='submit' disabled={loading}>
              Reset Password
            </Button>
            <Link to='/'>Go back</Link>
          </form>
        </div>
      </div>
    </>
  );
}
