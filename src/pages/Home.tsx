import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import BeforeAfter from '../components/BeforeAfter';
import Testimonials from '../components/Testimonials';
import Doctors from '../components/Doctors';
import Booking from '../components/Booking';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Services />
      <BeforeAfter />
      <Testimonials />
      <Doctors />
      <Booking />
    </div>
  );
};

export default Home;
