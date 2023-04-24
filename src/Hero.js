import React from 'react';
import { useGlobalContext } from './context';
import boots from './images/boots.jpg';
import addi from './images/addi.jpg';
import Footer from './Footer';

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>
            IMPOSSIBLE<br />
            IS NOTHING
          </h1>
          <p>
          Here’s an invitation to change the world, to see what’s possible and share the love of sport.
          Our commitment to a more sustainable world for suture generations. Join team adidas today. 
          </p>
          <button className='btn'>Start now</button>
        </article>
        <article className='hero-images'>
          <img src={boots} className='boots-img' alt='boot' />
        </article>
      </div>
        <h2>HERE TO CREATE</h2>
      <img src={addi} className='addi-img' alt='addi' />
      <p></p>
      <h3>THROUGH SPORT, WE HAVE THE POWER TO CHANGE LIVES</h3>
      {/* <button className='btn btn-dark btn-lg'>Explore Here</button> */}
      <Footer />
    </section>
  );
};

export default Hero;
