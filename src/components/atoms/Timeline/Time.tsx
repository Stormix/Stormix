import { cl } from 'dynamic-class-list';
import React, { FC } from 'react';

const Time: FC<{ className?: string; years: number[] }> = ({ className, years }) => {
  return (
    <div className={cl('', className)}>
      <div
        className="grid pt-4 border-t-4 "
        style={{
          gridTemplateColumns: `repeat(${years.length}, 1fr)`,
        }}
      >
        {years.map((year, i) => (
          <div key={i}>{year}</div>
        ))}
      </div>
    </div>
  );
};

export default Time;
