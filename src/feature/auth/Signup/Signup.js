import React, { useRef, useState } from 'react';
import { Button, Input } from '@mantine/core';
import styles from './Signup.module.css';

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError('Passwords do not match');
    }

    //signup
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <h2>Login into your account</h2>
          {error && <span>{error}</span>}
          <form onSubmit={handleSubmit}>
            <Input.Wrapper label='Email'>
              <Input
                placeholder='Enter your email'
                type='email'
                ref={emailRef}
              />
            </Input.Wrapper>
            <Input.Wrapper label='Password'>
              <Input
                placeholder='Enter your password'
                type='password'
                ref={passwordRef}
              />
            </Input.Wrapper>
            <Input.Wrapper label='Confirm Password'>
              <Input
                placeholder='Enter your password'
                type='password'
                ref={confirmPasswordRef}
              />
            </Input.Wrapper>
            <Button type='submit'>Signup</Button>
          </form>
        </div>
      </div>
    </>
  );
}
