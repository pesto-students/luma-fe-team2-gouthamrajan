import React from 'react';
import { Button, Col, Form, Input, Row, TimePicker } from 'antd';
import Layout from './Layout';
import { useDispatch, useSelector } from 'react-redux';
// import { showLoading, hideLoading } from '../redux/alertsSlice';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ExpertForm from './ExpertForm';
import moment from 'moment';
import { useAuth } from '../../context/AuthContext';

function ExpertDashboard() {
  return (
    <Layout>
      <h1 className='page-title'>Expert Dashboard</h1>
      <hr />

      {/* <DoctorForm onFinish={onFinish} /> */}
      <ExpertForm />
    </Layout>
  );
}

export default ExpertDashboard;
