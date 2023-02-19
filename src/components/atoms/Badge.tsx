import React, { FC, ReactNode } from 'react';
import { Color } from '@/config/colors';
import { cl } from 'dynamic-class-list';

const Badge: FC<{ className?: string; children?: ReactNode; color: Color }> = ({ className, children, color }) => {
  const changeHue = (color: string, amount: number) => {
    return color.replace('400', amount.toString());
  };

  return (
    <div
      className={cl(
        `text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md`,
        className,
        changeHue(color.text, 300),
        changeHue(color.bg, 400),
      )}
    >
      {children}
    </div>
  );
};

export default Badge;
