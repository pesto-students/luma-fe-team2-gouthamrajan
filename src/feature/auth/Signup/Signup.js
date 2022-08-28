import React, { useRef, useState } from 'react';
import styles from './Signup.module.css';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { createAuthUserWithEmailAndPassword } from '../../../lib/firebase';
import { useAuth } from '../../../context/AuthContext';

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [error, setError] = useState('');
  const { signup } = useAuth();
  const [loading, setLoading] = useState(false);

  const resetForm = () => {};

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError('Passwords do not match');
    }

    //signup
    try {
      setError('');
      setLoading(true);
      const response = await createAuthUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      );
      console.log(response);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setError('Email is already in use');
      }
      setLoading(false);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <h2 className={styles.heading}>Create your account</h2>
          {error && <span>{error}</span>}
          <form onSubmit={handleSubmit}>
            <Input
              label='Email'
              placeholder='Enter your email'
              type='email'
              ref={emailRef}
            />
            <Input
              label='Password'
              placeholder='Enter your password'
              type='password'
              ref={passwordRef}
            />
            <Input
              label='Confirm Password'
              placeholder='Enter your password'
              type='password'
              ref={confirmPasswordRef}
            />
            <Button type='submit'>Signup</Button>
          </form>
        </div>
      </div>
    </>
  );
}
