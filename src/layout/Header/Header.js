import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Link from '../../components/Link';
import Modal from '../../components/Modal';
import Login from '../../feature/auth/Login/Login';
import styles from './Header.module.css';

export default function Header() {
  const navigate = useNavigate();
  const [opened, setOpened] = useState(false);
  return (
    <>
      <header className={styles.header}>
        <Modal opened={opened} setOpened={setOpened}>
          <Login />
        </Modal>
        <h2 className={styles.logo} onClick={() => navigate('/')}>
          Luma
        </h2>
        <nav className={styles.nav}>
          <Link to='/experts'>For Experts</Link>
          <Link>Book slot</Link>
          <Link to='/login'>Sign In</Link>
        </nav>
      </header>
    </>
  );
}
