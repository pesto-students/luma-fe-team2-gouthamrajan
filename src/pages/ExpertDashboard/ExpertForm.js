import { wait } from '@testing-library/user-event/dist/utils';
import { Button, Col, Form, Input, Row, TimePicker } from 'antd';
import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState, useCallback } from 'react';
import { useAuth } from '../../context/AuthContext';

function ExpertForm() {
  const { currentUser } = useAuth();
  const [formData, setFormData] = useState(() => {
    return {
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      specialization: '',
      experience: '',
      feePerConsultation: '',
    };
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  useEffect(() => {
    const fetchExpertsDetails = async () => {
      try {
        const response = await axios.post(
          'http://localhost:5500/get-expert-info',
          {
            email: currentUser.email,
          }
        );
        console.log(response);
        console.log(response.data.data);
        const {
          displayName,
          email,
          address,
          specialization,
          experience,
          feePerConsultation,
        } = response.data.data;
        const [firstName, lastName] = displayName.split(' ');
        setFormData({
          firstName,
          lastName,
          email,
          address,
          specialization,
          experience,
          feePerConsultation,
        });
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchExpertsDetails();
  }, []);

  return (
    <Form layout='vertical'>
      <h1 className='card-title mt-3'>Personal Information</h1>
      <Row gutter={20}>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label='First Name'
            name='firstName'
            rules={[{ required: true }]}
          >
            <Input
              placeholder='First Name'
              value={formData.firstName}
              onChange={handleChange}
              name='firstName'
            />
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label='Last Name'
            name='lastName'
            rules={[{ required: true }]}
          >
            <Input
              placeholder='Last Name'
              value={formData.lastName}
              onChange={handleChange}
              name='lastName'
            />
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label='Email'
            name='email'
            rules={[{ required: true }]}
          >
            <Input
              placeholder='Email'
              value={formData.email}
              onChange={handleChange}
              name='email'
            />
          </Form.Item>
        </Col>

        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label='Address'
            name='address'
            rules={[{ required: true }]}
          >
            <Input
              placeholder='Address'
              value={formData.address}
              onChange={handleChange}
              name='address'
            />
          </Form.Item>
        </Col>
      </Row>
      <hr />
      <h1 className='card-title mt-3'>Professional Information</h1>
      <Row gutter={20}>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label='Specialization'
            name='specialization'
            rules={[{ required: true }]}
          >
            <Input
              placeholder='Specialization'
              value={formData.specialization}
              onChange={handleChange}
              name='specialization'
            />
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label='Experience'
            name='experience'
            rules={[{ required: true }]}
          >
            <Input
              placeholder='Experience'
              type='number'
              value={formData.experience}
              onChange={handleChange}
              name='experience'
            />
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label='Fee Per Cunsultation'
            name='feePerCunsultation'
            rules={[{ required: true }]}
          >
            <Input
              placeholder='Fee Per Cunsultation'
              type='number'
              value={formData.feePerConsultation}
              onChange={handleChange}
              name='feePerCunsultation'
            />
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label='Timings'
            name='timings'
            rules={[{ required: true }]}
          >
            <TimePicker.RangePicker format='HH:mm' />
          </Form.Item>
        </Col>
      </Row>

      <div className='d-flex justify-content-end'>
        <Button className='primary-button' htmlType='submit'>
          SUBMIT
        </Button>
      </div>
    </Form>
  );
}

export default ExpertForm;
