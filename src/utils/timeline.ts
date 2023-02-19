import { IEvent } from '@/types/timeline';

export const experienceTimelineIndices = (experience: IEvent, years: number[]) => {
  const start = years.findIndex((year) => year === new Date(experience.start).getFullYear()) + 1;
  const end = years.findIndex((year) => year === new Date(experience.end).getFullYear()) + 2;

  return { start, end };
};
