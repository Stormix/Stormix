import { cl } from 'dynamic-class-list';
import React, { FC } from 'react';

const Time: FC<{ className?: string; years: number[] }> = ({ className, years }) => {
  return (
    <div className={cl('', className)}>
      <div className="flex items-center justify-between pt-4 border-t-4">
        {years.map((year, i) => (
          <div key={i}>{year}</div>
        ))}
      </div>
    </div>
  );
};

export default Time;
