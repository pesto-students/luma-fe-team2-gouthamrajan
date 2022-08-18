import React from 'react';
import { Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import Link from '../../../components/Link';
import { signInWithGooglePopup } from '../../../lib/firebase';

export default function Login() {
  const navigate = useNavigate();

  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <h2>Login in or sign up in</h2>
          <p>Use your email or google account to continue with Luma</p>

          <Button onClick={logGoogleUser}>Continue with Google</Button>
          <Button onClick={() => navigate('/email-login')}>
            Continue with Email
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
