import React, { FC } from 'react';
import { IExperience } from '@/types/timeline';
import { cl } from 'dynamic-class-list';

const Experience: FC<{ experience: IExperience; className?: string }> = ({ experience, className }) => {
  return (
    <div className={cl(className, 'flex flex-col text-xs')}>
      <span>{experience.position}</span>
      {/* <span>{experience.company}</span> */}
    </div>
  );
};

export default Experience;
