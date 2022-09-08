import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import Link from '../../../components/Link';
import Button from '../../../components/Button';
import { Alert } from '@mantine/core';
import { signInWithGooglePopup } from '../../../lib/firebase';
import { useEffect } from 'react';
import { useAuth } from '../../../context/AuthContext';

export default function Login() {
  const navigate = useNavigate();
  const { currentUser, login } = useAuth();

  const logGoogleUser = async () => {
    await signInWithGooglePopup();
    navigate('/');
  };

  //redirect to home if already logged in
  useEffect(() => {
    if (currentUser !== null) {
      navigate('/');
    }
  }, []);

  //demo login
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const handleDemoUserLogin = async (e) => {
    e.preventDefault();

    //login
    try {
      setError('');
      setLoading(true);
      await login('test@test.com', 'Test@123');
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
          <h2 className={styles.heading}>Login in or sign up in</h2>
          <p>Use your email or google account to continue with Luma</p>
          {error && (
            <Alert color='red' variant='outline'>
              {error}
            </Alert>
          )}
          <Button
            onClick={logGoogleUser}
            variant='gradient'
            gradient={{ from: 'teal', to: 'blue', deg: 60 }}
          >
            Continue with Google
          </Button>
          <Button onClick={() => navigate('/email-login')}>
            Continue with Email
          </Button>
          <Button onClick={handleDemoUserLogin} disabled={loading} color='gray'>
            Demo Login
          </Button>
          <Link to='/signup'>Don't have an account? Create One.</Link>
          <p>
            By continuing, you agree to Luma's Terms of Use. Read our Privacy
            Policy.
          </p>
        </div>
      </div>
    </>
  );
}
