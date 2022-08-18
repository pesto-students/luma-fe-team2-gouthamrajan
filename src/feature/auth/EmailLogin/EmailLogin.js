import React, { useRef } from 'react';
import { Button, Input } from '@mantine/core';
import Link from '../../../components/Link';
import styles from './EmailLogin.module.css';

export default function EmailLogin() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    //login
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <h2>Login into your account</h2>
          <Input.Wrapper label='Email'>
            <Input placeholder='Enter your email' type='email' ref={emailRef} />
          </Input.Wrapper>
          <Input.Wrapper label='Password'>
            <Input
              placeholder='Enter your password'
              type='password'
              passwordRef={passwordRef}
            />
          </Input.Wrapper>
          <Button type='submit'>Login</Button>
          <Link to='/forgot-password'>Forgot Password?</Link>
        </div>
      </div>
    </>
  );
}
