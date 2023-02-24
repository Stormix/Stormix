import React from 'react';
import { FC } from 'react';

import Email from '@/components/atoms/Email';
import Socials from '@/components/atoms/Socials';
import Header from '@/components/molecules/Header';

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <div className="flex flex-col w-full h-full bg-background-light dark:bg-background dark:text-primary-light text-primary-dark">
        <Header />
        <main className="container flex flex-col m-auto">
          <div className="container flex flex-col w-full">
            <div className="container fixed bottom-0">
              <div className="flex flex-row items-end justify-between">
                <Socials /> <Email />
              </div>
            </div>
            {children}
          </div>
        </main>
      </div>
    </>
  );
};

export default Layout;
