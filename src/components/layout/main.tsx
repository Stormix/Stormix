import React from 'react';
import { FC } from 'react';
import Email from '../atoms/Email';
import Socials from '../atoms/Socials';
import Header from '../molecules/Header';

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <div className="flex flex-col w-full bg-background">
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
