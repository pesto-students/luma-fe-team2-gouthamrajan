import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import { Image } from '@mantine/core';
import styles from './Home.module.css';
export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.heroHeading}>Powering your financial dream.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et.
          </p>
          <Image
            src='/hero-image.webp'
            alt='turned on black and gray laptop'
            fit='contain'
            className={styles.heroImage}
          />
        </section>
        <section>
          <h1 className={styles.heroHeading}>
            Better Result with Quality Services
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et.
          </p>
        </section>
        <section>
          <h1 className={styles.heroHeading}>Services</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio.
          </p>
        </section>
        <section>
          <h1 className={styles.heroHeading}>
            Join the rapidly growing community
          </h1>
        </section>
      </main>
      <Footer />
    </>
  );
}
