import { cl } from 'dynamic-class-list';
import React, { FC } from 'react';

const Button: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <button className={cl('px-4 py-4 bg-primary text-black leading-5 rounded', 'hover:bg-primary-600')}>
      {children}
    </button>
  );
};

export default Button;
