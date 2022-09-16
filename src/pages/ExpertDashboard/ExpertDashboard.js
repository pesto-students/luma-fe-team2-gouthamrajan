import React from 'react';
import Footer from '../../layout/Footer/Footer';
import Header from '../../layout/Header/Header';
import { Aside, Text } from '@mantine/core';
import Button from '../../components/Button';
import styles from './ExpertDashboard.module.css';

export default function ExpertDashboard() {
  return (
    <>
      <Header />
      <main>
        <div className='container'>
          <div className={styles.dashboard}>
            <div className={styles.dashboardAside}>
              <Button>Profile</Button>
              <Button>Slots</Button>
            </div>
            <div className={styles.dashboardMain}>main</div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
