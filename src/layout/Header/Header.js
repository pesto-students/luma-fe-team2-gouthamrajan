import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Link from '../../components/Link';
import styles from './Header.module.css';
import Modal from '../../components/Modal';

export default function Header() {
  const navigate = useNavigate();
  const [opened, setOpened] = useState(false);
  return (
    <>
      <header>
        <Modal opened={opened} setOpened={setOpened}>
          Modal info
        </Modal>
        <h2 className={styles.logo} onClick={() => navigate('/')}>
          Luma
        </h2>
        <nav>
          <Link to='/experts'>For Experts</Link>
          <Link>Book slot</Link>
          <div onClick={() => setOpened(true)}>Sign In</div>
        </nav>
      </header>
    </>
  );
}
