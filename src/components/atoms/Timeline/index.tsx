import React, { FC } from 'react';
import { cl } from 'dynamic-class-list';
import Experience from '@/components/atoms/Timeline/Experience';
import { IExperience } from '@/types/timeline';
import { getColSpan } from '@/utils/timeline';
import Time from './Time';

const Timeline: FC<{ className?: string }> = ({ className }) => {
  const experiences: IExperience[] = [
    {
      company: 'Cognizant',
      position: 'Software Engineer',
      start: '2019-06-01',
      end: '2020-06-01',
    },
    {
      company: 'Cognizant 2',
      position: 'Software Engineer 2',
      start: '2015-06-01',
      end: '2018-06-01',
    },
  ];

  const startYear = 2015;
  const years = Array.from({ length: new Date().getFullYear() - startYear + 1 }, (_, i) => startYear + i);

  return (
    <div className={cl(className, 'flex flex-col w-full px-8 py-4 bg-primary-dark-900')}>
      <div
        className={`grid grid-cols-${years.length} grid-rows-${experiences.length + 1} h-[${
          experiences.length * 50
        }px]`}
      >
        {experiences.map((experience, i) => {
          const { span, start, end } = getColSpan(experience, years);
          return (
            <Experience
              key={i}
              experience={experience}
              className={cl(
                'w-full h-10',
                `col-span-${span}`,
                `col-start-${start}`,
                `col-end-${end}`,
                `row-start-${i + 1}`,
                `row-end-${i + 2}`,
              )}
            />
          );
        })}
      </div>
      <Time years={years} />
    </div>
  );
};

export default Timeline;
