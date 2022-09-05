import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import { Image } from '@mantine/core';
import Button from '../../components/Button';
import './Home.styles.css';

export default function Home() {
  return (
    <>
      <Header />
      <main className='main'>
        <div className='container'>
          <section className='hero-section'>
            <div className='hero-left'>
              <h1 className='hero-heading'>Powering your financial dream.</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Nunc vulputate libero et.
              </p>
            </div>

            <Image
              src='/hero-image.webp'
              alt='turned on black and gray laptop'
              fit='contain'
              radius='md'
            />
          </section>
          <section className='section-1 section-center'>
            <h1 className='hero-heading'>Better Result with</h1>
            <h1 className='hero-heading'>Quality Services</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </section>
          <section className='section-2'>
            <div className='section-2-cards'>
              <div className='section-2-card'>
                <h3>Lorem ipsum dolor sit </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit.
                </p>
              </div>
              <div className='section-2-card'>
                <h3>Lorem ipsum dolor sit </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit.
                </p>
              </div>
              <div className='section-2-card'>
                <h3>Lorem ipsum dolor sit </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit.
                </p>
              </div>
            </div>

            <Image
              src='/home-section-2.webp'
              alt='pens and ruler on paper'
              fit='contain'
              radius='md'
              width={900}
            />
          </section>
          <section className='section-3 section-center'>
            <h1 className='hero-heading'>Services</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio, ac aliquet
              odio.
            </p>
          </section>
          <section className='section-4'>
            <div className='section-4-cards'>
              <div className='section-4-card'>
                <h3>Lorem ipsum dolor sit </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit.
                </p>
              </div>
              <div className='section-4-card'>
                <h3>Lorem ipsum dolor sit </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit.
                </p>
              </div>
              <div className='section-4-card'>
                <h3>Lorem ipsum dolor sit </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit.
                </p>
              </div>
            </div>
          </section>
        </div>

        <section className='last-section'>
          <div className='container'>
            <div className='last-section-container'>
              <h1 className='hero-heading'>
                Join the rapidly growing community
              </h1>
              <Button>Book a slot</Button>
            </div>
            {/* <Image
              src='/last-section.webp'
              alt='people sitting on chairs in front of table while holding pens during daytime'
              fit='contain'
              radius='md'
            /> */}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
