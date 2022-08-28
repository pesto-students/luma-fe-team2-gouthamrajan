import styles from './Footer.styles.css';

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className='container footer-container'>
          <h2 className={styles.logo}>Luma</h2>
          <span className={styles.footerText}>
            @2022 Luma. All rights reserved
          </span>
        </div>
      </footer>
    </>
  );
}
