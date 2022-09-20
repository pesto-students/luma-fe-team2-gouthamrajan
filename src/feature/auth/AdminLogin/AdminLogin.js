import React, { useState, useEffect } from 'react';
import { Input } from '@mantine/core';
import Link from '../../../components/Link';
import Button from '../../../components/Button';
import { useAuth } from '../../../context/AuthContext';
import { Alert, Checkbox } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import styles from './AdminLogin.module.css';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login, currentUser } = useAuth();
  const navigate = useNavigate();

  // const resetForm = () => {};

  const handleSubmit = async (e) => {
    e.preventDefault();

    //login
    try {
      setError('');
      setLoading(true);
      if (email !== 'admin@luma.com') {
        throw new Error();
      }
      await login(email, password);
      navigate('/admin-dashboard');
    } catch (error) {
      setError('Failed to log in');
    }
    setLoading(false);
  };

  //redirect to home if already logged in
  useEffect(() => {
    if (currentUser !== null) {
      navigate('/admin-dashboard');
    }
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <h2 className={styles.heading}>Admin Login</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
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
                required
              />
            </Input.Wrapper>
            <Input.Wrapper label='Password'>
              <Input
                placeholder='Enter your password'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ paddingBlockEnd: '1em' }}
                required
              />
            </Input.Wrapper>
            <Button type='submit' disabled={loading}>
              Login
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
