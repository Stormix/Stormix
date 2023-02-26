import React, { FC } from 'react';

import { useTranslation } from 'react-i18next';
import PageHero from '@/components/atoms/PageHero';
import Layout from '@/components/layout/main';
import Contact from '@/components/organisms/Contact';
import ScrollToTop from '@/components/atoms/ScrollToTop';

const Article: FC = () => {
  const { t } = useTranslation();
  // Go back to last page
  const goBack = () => window.history.back();

  return (
    <Layout noNav>
      <ScrollToTop />
      <div className="flex flex-col items-center">
        <PageHero title={'Article title here'} onBack={() => goBack()}>
          <img src="https://placeimg.com/640/480/any" className="rounded" />
        </PageHero>
        <div className="flex flex-col items-center justify-center w-11/12 lg:w-3/6 py-14" id="about">
          <div className="z-10 flex flex-col gap-4 mt-24 text-justify">
            <p>
              I started web development when I was 14 and my first project was a music website where I hosted some music
              projects I made with a friend mine. (Stormix was my <i>&quot;artist&quot;</i> name)
            </p>
            <p>
              Fast-forward a few years, I became obsessed with web development, and started my journey as a freelance
              software developer. Since then, I have been helping clients around the world bring their ideas to reality.
            </p>

            <p>
              During my internships and my last year, I started a full time job working as the lead developer for a
              belgian startup known as <span className="cursor-pointer text-primary">Yogalive</span>. And in few months,
              we managed to build a full class booking and video on demand platform, along with mobile apps for both iOS
              and Android. I handled the entire development process, from the initial design implementation to the
              deployment of the final product.
            </p>
            <p>
              Unfortunately, towards the end of december 2021,{' '}
              <span className="cursor-pointer text-primary">Yogalive</span> decided to shut down the company and I
              switched to a new job. I&apos;m currently working as a full stack software engineer for a company known as{' '}
              <span className="text-blue-800 cursor-pointer">Metamaze</span>, where I&apos;m part of the team in charge
              of maintaining and developing the company&apos;s{' '}
              <span className="" title="Automated document processing">
                ADP
              </span>{' '}
              platform. I’m actively looking for new opportunities, preferably fulltime and remote, so if you have
              something in mind, let’s <span className="cursor-pointer text-primary">.chat()</span>.
            </p>

            <p>I primarily use the following technologies, tools and libraries:</p>

            <ul className="gap-4 px-4 list-disc columns-2 text-start">
              <li>Typescript</li>
              <li>Python</li>
              <li>PHP</li>
              <li>Vue / React</li>
              <li>Web Components (Stencil)</li>
              <li>Node.js</li>
              <li>C++</li>
              <li>SQL / NoSQL</li>
              <li>Git</li>
              <li>Hybrid Apps (Capacitor)</li>
              <li>Docker</li>
              <li>Kubernetes / HELM</li>
              <li>CI / CD</li>
            </ul>

            <p>
              Feel free to go through the timeline below for a more comprehensive list of stuff I worked with in the
              past.
            </p>
          </div>
        </div>
        <Contact />
      </div>
    </Layout>
  );
};

export default Article;
