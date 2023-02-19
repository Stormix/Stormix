import React, { FC } from 'react';
import { cl } from 'dynamic-class-list';
import Event from '@/components/atoms/Timeline/Event';
import { IExperience } from '@/types/timeline';
import Time from './Time';
import { experienceTimelineIndices } from '../../../utils/timeline';

const Timeline: FC<{ className?: string }> = ({ className }) => {
  const experiences: IExperience[] = [
    {
      company: 'Metamaze',
      position: 'Full Stack Engineer',
      start: '2021-11-01',
      end: '2023-06-01',
    },
    {
      company: 'Yogalive',
      position: 'Lead Developer',
      start: '2020-04-01',
      end: '2021-11-01',
    },
    {
      company: 'Freelance',
      position: 'Software Developer',
      start: '2019-03-01',
      end: '2020-03-01',
    },
    {
      company: 'Coment',
      position: 'Intern',
      start: '2019-07-01',
      end: '2019-08-01',
    },
  ];

  // Get the start year from the first experience
  const startYear = new Date(experiences[experiences.length - 1].start).getFullYear();
  const years = Array.from({ length: new Date().getFullYear() - startYear + 1 }, (_, i) => startYear + i);

  return (
    <div className={cl(className, 'flex flex-col w-full px-4 py-4 bg-primary-dark-900')}>
      <div
        className={`grid gap-2`}
        style={{
          gridTemplateColumns: `repeat(${years.length}, 1fr)`,
          gridTemplateRows: `repeat(${experiences.length + 1}, 1fr)`,
        }}
      >
        {experiences.map((experience, i) => {
          const { start, end } = experienceTimelineIndices(experience, years);
          return (
            <Event
              key={i}
              experience={experience}
              style={{
                gridRowStart: i + 1,
                gridRowEnd: i + 2,
                gridColumnStart: start,
                gridColumnEnd: end,
              }}
            />
          );
        })}
      </div>
      <Time years={years} />
    </div>
  );
};

export default Timeline;
