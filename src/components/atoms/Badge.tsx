import React, { FC, ReactNode } from 'react';
import { Color } from '@/config/colors';
import { cl } from 'dynamic-class-list';

const Badge: FC<{ className?: string; children?: ReactNode; color?: Color; onClick?: () => void }> = ({
  className,
  children,
  color = {
    text: 'dark:text-primary-dark-400 text-primary-light',
    bg: 'bg-primary-dark-400',
  },
  onClick,
}) => {
  const changeHue = (color: string, amount: number) => {
    return color.replace('400', amount.toString());
  };

  return (
    <span
      className={cl(
        `text-xs font-medium mr-2 px-2.5 py-1 rounded-md cursor-pointer flex items-center justify-center shrink`,
        className,
        changeHue(color.text, 300),
        changeHue(color.bg, 400),
      )}
      onClick={() => onClick?.()}
    >
      {children}
    </span>
  );
};

export default Badge;
