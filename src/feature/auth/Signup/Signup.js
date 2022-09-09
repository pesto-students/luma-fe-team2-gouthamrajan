import React, { useState } from 'react';
import styles from './Signup.module.css';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { useAuth } from '../../../context/AuthContext';
import Link from '../../../components/Link';
import { Alert } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  // const resetForm = () => {};

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError('Passwords do not match');
    }

    //signup
    try {
      setError('');
      setLoading(true);
      await signup(email, password);
      navigate('/');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setError('Email is already in use');
      } else {
        setError('Failed to sign in');
      }
    }
    setLoading(false);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <h2 className={styles.heading}>Create your account</h2>
          {error && (
            <Alert color='red' variant='outline'>
              {error}
            </Alert>
          )}
          <form onSubmit={handleSubmit} className={styles.form}>
            <Input
              label='Name'
              placeholder='Enter your name'
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              label='Email'
              placeholder='Enter your email'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              label='Password'
              placeholder='Enter your password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Input
              label='Confirm Password'
              placeholder='Enter your password'
              type='password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <Button type='submit' disabled={loading}>
              Signup
            </Button>
            <Link to='/login'>Already have an account? Login.</Link>
          </form>
        </div>
      </div>
    </>
  );
}
