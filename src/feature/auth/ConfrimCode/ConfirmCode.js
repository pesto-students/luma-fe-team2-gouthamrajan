import React from 'react';
import { Button, Input } from '@mantine/core';
import Link from '../../../components/Link';
import styles from './ConfirmCode.module.css';

export default function ConfirmCode() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <h2>Let us know it’s you</h2>
          <p>Last step! To secure your accout, enter the code just sent you.</p>
          <Input.Wrapper label='Email'>
            <Input placeholder='Enter your email' />
          </Input.Wrapper>
          <Button>Login</Button>
        </div>
      </div>
    </>
  );
}
