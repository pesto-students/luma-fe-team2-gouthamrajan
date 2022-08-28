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
        <Image
          src='/404.svg'
          alt='pens and ruler on paper'
          fit='contain'
          radius='md'
        />
      </main>
      <Footer />
    </>
  );
}
