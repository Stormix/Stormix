import React, { FC } from 'react';
import { cl } from 'dynamic-class-list';
import TimelineEvent from '@/components/molecules/Timeline/TimelineEvent';
import Time from './Time';
import { experienceTimelineIndices } from '@/utils/timeline';
import { experiences } from '@/config/experiences';

const Timeline: FC<{ className?: string }> = ({ className }) => {
  const sortedExperiences = experiences.sort((a, b) => {
    const aStart = new Date(a.start).getTime();
    const bStart = new Date(b.start).getTime();
    return aStart - bStart;
  });

  const startYear = new Date(sortedExperiences[0].start).getFullYear();
  const years = Array.from({ length: new Date().getFullYear() - startYear }, (_, i) => startYear + i);

  return (
    <div
      className={cl(
        className,
        'flex flex-col w-full px-4 my-4 py-4 dark:bg-primary-dark-900  rounded bg-primary-light-400 ',
      )}
    >
      <div
        className={`grid gap-2`}
        style={{
          gridTemplateColumns: `repeat(${years.length * 4}, 1fr)`,
          gridTemplateRows: `repeat(${experiences.length + 1}, 1fr)`,
        }}
      >
        {experiences.map((experience, i) => {
          const { start, end } = experienceTimelineIndices(experience, years);
          return (
            <TimelineEvent
              key={i}
              experience={experience}
              style={{
                gridRowStart: i + 1,
                gridRowEnd: i + 2,
                gridColumnStart: 1 + parseInt((start * 4).toString()),
                gridColumnEnd: 1 + parseInt((end * 4).toString()),
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
