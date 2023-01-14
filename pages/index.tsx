import type { NextPage } from 'next';
import Head from 'next/head';
import Email from '../components/Email';
import Hero from '../components/Hero';
import Socials from '../components/Socials';

const Home: NextPage = () => {
  return (
    <div className="flex flex-row items-end h-full">
      <Head>
        <title>Anas Mazouni | Stormix</title>
      </Head>
      <Socials />
      <Hero />
      <Email />
    </div>
  );
};

export default Home;
