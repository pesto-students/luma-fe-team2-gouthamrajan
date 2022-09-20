import React from 'react';
import Footer from '../../layout/Footer/Footer';
import Header from '../../layout/Header/Header';
import { Aside, Text } from '@mantine/core';
import Button from '../../components/Button';
import styles from './ExpertDashboard.module.css';
import ExpertSidebar from './ExpertSidebar';
import { Outlet } from 'react-router-dom';

export default function ExpertDashboard() {
  return (
    <>
      <Header />
      <main>
        <div className='container'>
          <div className={styles.dashboard}>
            <ExpertSidebar />
            {/* <div className={styles.dashboard}>
            <div className={styles.dashboardAside}>
              <Button>Profile</Button>
              <Button>Meetings</Button>
              <Button>Logout</Button>
            </div>
            <div className={styles.dashboardMain}>main</div>
          </div> */}
            <Outlet />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
