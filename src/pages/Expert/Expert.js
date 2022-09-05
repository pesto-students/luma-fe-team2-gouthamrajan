import { useAuth } from '../../context/AuthContext';
import Footer from '../../layout/Footer/Footer';
import Header from '../../layout/Header/Header';
import { NativeSelect } from '@mantine/core';
import styles from './Experts.module.css';
import Button from '../../components/Button';

export default function Expert() {
  const { currentUser } = useAuth();
  return (
    <>
      <Header />
      <main>
        <div className='container'>
          {currentUser && currentUser.email && (
            <h1>Hello {currentUser.email}</h1>
          )}
          <p>Book your slots with the experts</p>
          <div className={styles.searchBox}>
            <NativeSelect
              data={['Stock', 'Crypto', 'Mutual Fund', 'Taxation']}
              label='Category'
              placeholder='Enter category'
            />
            <NativeSelect
              data={['Stock', 'Crypto', 'Mutual Fund', 'Taxation']}
              label='From'
              placeholder='Enter category'
            />
            <NativeSelect
              data={['Stock', 'Crypto', 'Mutual Fund', 'Taxation']}
              label='To'
              placeholder='Enter category'
            />
          </div>
          <div className={styles.expertList}>
            <div className={styles.expertCard}>
              <div className={styles.description}>
                <h3>Varun Agrawal</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                </p>
              </div>
              <div className={styles.slot}>
                <p className={styles.time}>6:00pm - 6:30pm</p>
                <p className={styles.date}>30 Jul 2022 (Saturday)</p>
                <Button>Book a slot</Button>
              </div>
            </div>
            <div className={styles.expertCard}>
              <div className={styles.description}>
                <h3>Varun Agrawal</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                </p>
              </div>
              <div className={styles.slot}>
                <p className={styles.time}>6:00pm - 6:30pm</p>
                <p className={styles.date}>30 Jul 2022 (Saturday)</p>
                <Button>Book a slot</Button>
              </div>
            </div>
            <div className={styles.expertCard}>
              <div className={styles.description}>
                <h3>Varun Agrawal</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                </p>
              </div>
              <div className={styles.slot}>
                <p className={styles.time}>6:00pm - 6:30pm</p>
                <p className={styles.date}>30 Jul 2022 (Saturday)</p>
                <Button>Book a slot</Button>
              </div>
            </div>
            <div className={styles.expertCard}>
              <div className={styles.description}>
                <h3>Varun Agrawal</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                </p>
              </div>
              <div className={styles.slot}>
                <p className={styles.time}>6:00pm - 6:30pm</p>
                <p className={styles.date}>30 Jul 2022 (Saturday)</p>
                <Button>Book a slot</Button>
              </div>
            </div>
            <div className={styles.expertCard}>
              <div className={styles.description}>
                <h3>Varun Agrawal</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                </p>
              </div>
              <div className={styles.slot}>
                <p className={styles.time}>6:00pm - 6:30pm</p>
                <p className={styles.date}>30 Jul 2022 (Saturday)</p>
                <Button>Book a slot</Button>
              </div>
            </div>
            <div className={styles.expertCard}>
              <div className={styles.description}>
                <h3>Varun Agrawal</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                </p>
              </div>
              <div className={styles.slot}>
                <p className={styles.time}>6:00pm - 6:30pm</p>
                <p className={styles.date}>30 Jul 2022 (Saturday)</p>
                <Button>Book a slot</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
