import React, { useState } from 'react';
import { Button, Input } from '@mantine/core';
import Link from '../../../components/Link';
import { useAuth } from '../../../context/AuthContext';
import { Alert } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import styles from './EmailLogin.module.css';

export default function EmailLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  // const resetForm = () => {};

  const handleSubmit = async (e) => {
    e.preventDefault();

    //login
    try {
      setError('');
      setLoading(true);
      await login(email, password);
      navigate('/');
    } catch (error) {
      setError('Failed to log in');
    }
    setLoading(false);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <h2 className={styles.heading}>Login into your account</h2>
          <form onSubmit={handleSubmit}>
            {error && (
              <Alert color='red' variant='outline'>
                {error}
              </Alert>
            )}
            <Input.Wrapper label='Email'>
              <Input
                placeholder='Enter your email'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Input.Wrapper>
            <Input.Wrapper label='Password'>
              <Input
                placeholder='Enter your password'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ paddingBlockEnd: '1em' }}
              />
            </Input.Wrapper>
            <Button type='submit' disabled={loading}>
              Login
            </Button>
          </form>
          <Link to='/forgot-password'>Forgot Password?</Link>
        </div>
      </div>
    </>
  );
}
