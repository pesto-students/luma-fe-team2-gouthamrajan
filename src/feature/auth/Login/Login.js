import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import Link from '../../../components/Link';
import Button from '../../../components/Button';
import { signInWithGooglePopup } from '../../../lib/firebase';
import { useEffect } from 'react';
import { useAuth } from '../../../context/AuthContext';

export default function Login() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

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

  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <h2 className={styles.heading}>Login in or sign up in</h2>
          <p>Use your email or google account to continue with Luma</p>

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
