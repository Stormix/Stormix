import type { NextPage } from 'next';
import Head from 'next/head';
import About from '../components/sections/About';
import Hero from '../components/sections/Hero';
import Resume from '../components/sections/Resume';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center">
      <Head>
        <title>Anas Mazouni | Stormix</title>
      </Head>
      <Hero />
      <About />
      <Resume />
    </div>
  );
};

export default Home;
