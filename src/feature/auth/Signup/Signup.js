import React, { useRef } from 'react';
import { Button, Input } from '@mantine/core';
import Link from '../../../components/Link';
import styles from './Signup.module.css';

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <h2>Login into your account</h2>
          <Input.Wrapper label='Email'>
            <Input placeholder='Enter your email' type='email' />
          </Input.Wrapper>
          <Input.Wrapper label='Password'>
            <Input placeholder='Enter your password' type='password' />
          </Input.Wrapper>
          <Input.Wrapper label='Confirm Password'>
            <Input placeholder='Enter your password' type='password' />
          </Input.Wrapper>
          <Button type='submit'>Signup</Button>
        </div>
      </div>
    </>
  );
}
