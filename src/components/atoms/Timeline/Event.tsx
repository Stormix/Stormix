import React, { CSSProperties, FC } from 'react';
import { IExperience } from '@/types/timeline';
import { cl } from 'dynamic-class-list';
import { sample } from 'lodash';

const Experience: FC<{ experience: IExperience; style: CSSProperties; className?: string }> = ({
  experience,
  className,
  style,
}) => {
  const colors = [
    'border-red-400',
    'border-green-400',
    'border-blue-400',
    'border-yellow-400',
    'border-purple-400',
    'border-pink-400',
    'border-indigo-400',
    'border-teal-400',
    'border-orange-400',
    'border-amber-400',
    'border-yellow-400',
    'border-lime-400',
    'border-emerald-400',
    'border-cyan-400',
    'border-sky-400',
    'border-violet-400',
    'border-purple-400',
    'border-fuchsia-400',
    'border-pink-400',
    'border-rose-400',
  ];

  return (
    <div className={cl(className, 'flex flex-col text-xs border-b-8 pb-2', sample(colors))} style={style}>
      {experience.position} - {experience.company}
    </div>
  );
};

export default Experience;
