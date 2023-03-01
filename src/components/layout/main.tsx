import React from 'react';
import { FC } from 'react';

import Header from '@/components/molecules/Header';
import Footer from '@/components/molecules/Footer';
import Socials from '@/components/atoms/Socials';
import Email from '@/components/atoms/Email';
import { useLocation } from 'react-router-dom';

const Layout: FC<{ children: React.ReactNode; noNav?: boolean }> = ({ children, noNav }) => {
  const { pathname } = useLocation();
  return (
    <>
      <div className="flex flex-col items-center w-full h-full bg-background-light dark:bg-background dark:text-primary-light text-primary-dark">
        <Header noNav={noNav} />
        <Email className={'fixed bottom-0 lg:left-32'} />
        <Socials className={'fixed bottom-0 lg:right-32'} />
        <main className="container flex flex-col m-auto">
          <div className="container flex flex-col w-full">{children}</div>
        </main>
        {/* <CookieConsent path={pathname} isPreview={false} /> */}

        <Footer />
      </div>
    </>
  );
};

export default Layout;
