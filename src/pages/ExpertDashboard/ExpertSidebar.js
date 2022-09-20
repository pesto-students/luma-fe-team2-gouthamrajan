import React, { useState } from 'react';
import { Badge, Box, NavLink } from '@mantine/core';
import {
  IconHome2,
  IconGauge,
  IconChevronRight,
  IconActivity,
  IconCircleOff,
} from '@tabler/icons';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function ExpertSidebar() {
  const navigate = useNavigate();
  const { logout, setIsExpert } = useAuth();
  const [error, setError] = useState('');

  const handleLogout = async () => {
    setError('');

    try {
      await logout();
      navigate('/');
      setIsExpert(false);
    } catch (error) {
      setError('Failed to logout');
    }
  };

  return (
    <Box
      sx={{ width: 240 }}
      //   style={{ backgroundColor: 'var(--primary-color)' }}
    >
      <NavLink
        label='Meeting'
        icon={<IconHome2 size={16} stroke={1.5} />}
        onClick={() => navigate('/expert-dashboard')}
      />

      <NavLink
        label='Profile'
        icon={<IconCircleOff size={16} stroke={1.5} />}
        onClick={() => navigate('/expert-dashboard/profile')}
      />
      <NavLink
        label='Logout'
        icon={<IconGauge size={16} stroke={1.5} />}
        onClick={handleLogout}
      />
    </Box>
  );
}
