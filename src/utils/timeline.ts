import { IEvent } from '@/types/timeline';

export const experienceTimelineIndices = (experience: IEvent, years: number[]) => {
  const start =
    years.findIndex((year) => year === new Date(experience.start).getFullYear()) +
    (new Date(experience.start).getMonth() + 1) / 12;

  const end =
    years.findIndex((year) => year === new Date(experience.end).getFullYear()) +
    (new Date(experience.end).getMonth() + 1) / 12;
  console.log(
    { ...experience },
    { start, end },
    {
      start: parseInt((start * 4).toString()),
      end: parseInt((end * 4).toString()),
    },
  );
  return { start, end };
};
