import React from 'react';

import Layout from '@/components/layout/main';
import About from '@/components/organisms/About';
import Hero from '@/components/organisms/Hero';
import Resume from '@/components/organisms/Resume';
import Projects from '@/components/organisms/Projects';
import Contact from '@/components/organisms/Contact';

const Home = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center">
        <Hero />
        <About />
        <Resume />
        <Projects />
        <Contact />
      </div>
    </Layout>
  );
};

export default Home;
