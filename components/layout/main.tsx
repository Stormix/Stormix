import { FC } from 'react';
import Header from '../Header';

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <div className="w-full h-full bg-background">
        <Header />
        <main className="container mx-auto">{children}</main>
      </div>
    </>
  );
};

export default Layout;
