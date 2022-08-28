import { useNavigate } from 'react-router-dom';
import { IoMenu, IoClose } from 'react-icons/io5';
import Button from '../../components/Button';
import Link from '../../components/Link';
import './Header.styles.css';

export default function Header() {
  const navigate = useNavigate();

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
              <li className='navbar-item'>
                <Link to='/login'>Sign In</Link>
              </li>
            </ul>
            {/* <Button className='button'>Login</Button> */}
          </nav>
        </div>
      </header>
    </>
  );
}
