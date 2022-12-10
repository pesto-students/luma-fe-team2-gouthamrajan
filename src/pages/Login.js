import { Button, Form, Input } from 'antd';
import React from 'react';
import toast from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { hideLoading, showLoading } from '../redux/alertsSlice';

function Login() {
  // const {loading} = useSelector(state => state.alert)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      const response = await axios.post(
        'https://luma-backend.onrender.com/login',
        values
      );
      console.log(values);
      console.log(response);
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        console.log(response.data.data);
        localStorage.setItem('token', response.data.data);
        navigate('/');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error('Something went wrong');
    }
  };

  const demoLogin = async () => {
    try {
      dispatch(showLoading());
      const response = await axios.post(
        'https://luma-backend.onrender.com/login',
        {
          email: 'demo@demo.com',
          password: '12345678',
        }
      );
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        console.log(response.data.data);
        localStorage.setItem('token', response.data.data);
        navigate('/');
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error('Something went wrong');
    }
  };

  return (
    <div className='authentication'>
      <div className='authentication-form card p-3'>
        <h1 className='card-title'>Welcome Back</h1>
        <Form layout='vertical' onFinish={onFinish}>
          <Form.Item label='Email' name='email'>
            <Input placeholder='Email' />
          </Form.Item>
          <Form.Item label='Password' name='password'>
            <Input
              placeholder='Password'
              type='password'
              pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$'
            />
          </Form.Item>

          <Button
            className='primary-button my-2 full-width-button'
            htmlType='submit'
          >
            LOGIN
          </Button>

          <Button
            className='primary-button my-2 full-width-button'
            htmlType='button'
            onClick={demoLogin}
            type='ghost'
          >
            Demo Login
          </Button>

          <Link to='/register' className='anchor mt-2'>
            CLICK HERE TO REGISTER
          </Link>
        </Form>
      </div>
    </div>
  );
}

export default Login;
