import { FC } from 'react';
import Email from '../Email';
import Header from '../Header';
import Socials from '../Socials';

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <div className="w-full bg-background">
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
