import styles from './Footer.module.css';

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <h2 className={styles.logo}>Luma</h2>
        <span className={styles.footerText}>
          @2022 Luma. All rights reserved
        </span>
      </footer>
    </>
  );
}
