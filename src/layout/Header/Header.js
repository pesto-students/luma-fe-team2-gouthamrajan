import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, Menu } from '@mantine/core';
import Button from '../../components/Button';
import { useAuth } from '../../context/AuthContext';
import './Header.styles.css';

export default function Header() {
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState('');

  const handleLogout = async () => {
    setError('');

    try {
      await logout();
      navigate('/login');
    } catch (error) {
      setError('Failed to logout');
    }
  };

  return (
    <>
      <header className='header'>
        <div className='container header-container'>
          <a className='logo' onClick={() => navigate('/')}>
            Luma
          </a>

          <nav className='navbar'>
            <ul role='list' className='nav-list'>
              {/* <li className='navbar-item'>
                <Link>Book slot</Link>
              </li> */}
              <li className='navbar-item'>
                <Button onClick={() => navigate('/experts')}>
                  Book a slot
                </Button>
              </li>
              <li className='navbar-item'>
                <Button onClick={() => navigate('/my-slots')}>My slots</Button>
              </li>

              {currentUser ? (
                <>
                  <Menu>
                    <Menu.Target>
                      <Avatar
                        color='violet'
                        radius='xl'
                        variant='light'
                        style={{ cursor: 'pointer' }}
                      >
                        {currentUser.email.slice(0, 1).toUpperCase()}
                      </Avatar>
                    </Menu.Target>
                    <Menu.Dropdown>
                      <Menu.Item onClick={() => navigate('/my-slot')}>
                        My Slots
                      </Menu.Item>
                      <Menu.Item onClick={() => navigate('/reset-password')}>
                        Change Password
                      </Menu.Item>
                      <Menu.Item onClick={handleLogout}>Log out</Menu.Item>
                    </Menu.Dropdown>
                  </Menu>
                </>
              ) : (
                <li className='navbar-item'>
                  <Button onClick={() => navigate('/login')}>Sign In</Button>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
