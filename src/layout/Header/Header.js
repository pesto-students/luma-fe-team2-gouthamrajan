import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Link from '../../components/Link';
import { useAuth } from '../../context/AuthContext';
import './Header.styles.css';

export default function Header() {
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();
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
                  <Link to='/login'>Sign In</Link>
                </li>
              ) : (
                <li className='navbar-item'>
                  <a onClick={() => logout()}>Sign Out</a>
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
