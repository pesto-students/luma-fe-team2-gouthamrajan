import styles from './Header.module.css';

export default function Header() {
  return (
    <>
      <header>
        <h2 className={styles.logo}>Luma</h2>
        <nav>
          <a href='#'>For Experts</a>
          <a href='#'>Book a Slot</a>
          <a href='#'>Sign In</a>
        </nav>
      </header>
    </>
  );
}
