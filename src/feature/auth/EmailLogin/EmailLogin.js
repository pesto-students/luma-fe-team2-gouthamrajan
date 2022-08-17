import React, { useRef } from 'react';
import { Button, Input } from '@mantine/core';
import Link from '../../../components/Link';
import styles from './EmailLogin.module.css';

export default function EmailLogin() {
  const emailRef = useRef();
  const passwordRef = useRef();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <h2>Login into your account</h2>
          {/* <div>
            <label for='email'>Email</label>
            <input type='text' placeholder='Enter your email' id='email' />
          </div> */}
          <Input.Wrapper label='Email'>
            <Input placeholder='Enter your email' type='email' />
          </Input.Wrapper>
          <Input.Wrapper label='Password'>
            <Input placeholder='Enter your password' type='password' />
          </Input.Wrapper>
          <Button type='submit'>Login</Button>
          <Link to='/forgot-password'>Forgot Password?</Link>
        </div>
      </div>
    </>
  );
}
