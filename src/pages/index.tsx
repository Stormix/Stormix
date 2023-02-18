import React from 'react';

import Layout from '@/components/layout/main';
import About from '@/components/organisms/About';
import Hero from '@/components/organisms/Hero';
import Resume from '@/components/organisms/Resume';

const Home = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center">
        <Hero />
        <About />
        <Resume />
      </div>
    </Layout>
  );
};

export default Home;
