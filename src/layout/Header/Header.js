import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Link from '../../components/Link';
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
      navigate('login');
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
              <li className='navbar-item'>
                <Link to='/experts'>For Experts</Link>
              </li>
              <li className='navbar-item'>
                <Link>Book slot</Link>
              </li>

              {currentUser ? (
                <li className='navbar-item'>
                  <Button onClick={handleLogout}>Log out</Button>
                </li>
              ) : (
                <li className='navbar-item'>
                  <Button onClick={() => navigate('/login')}>Sign In</Button>
                </li>
              )}
            </ul>
            {/* <Button className='button'>Login</Button> */}
          </nav>
        </div>
      </header>
    </>
  );
}
