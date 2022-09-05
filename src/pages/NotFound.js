import React from 'react';
import Header from '../layout/Header/Header';
import Footer from '../layout/Footer/Footer';
import { Image } from '@mantine/core';

export default function NotFound() {
  return (
    <>
      <Header />
      <main
        style={{
          display: 'grid',
          placeContent: 'center',
          height: '80vh',
        }}
      >
        <div style={{ width: 1020 }}>
          <Image
            src='/404.svg'
            alt='pens and ruler on paper'
            fit='contain'
            radius='md'
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
