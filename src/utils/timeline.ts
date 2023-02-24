import { Event } from '@/types/timeline';

/**
 * Returns the start and end indices of an experience in the timeline
 *
 * @param experience - The experience to get the indices for
 * @param years - The years to get the indices for
 * @returns The start and end indices of the experience
 */
export const experienceTimelineIndices = (experience: Event, years: number[]) => {
  const startDate = new Date(experience.start);
  const start = years.findIndex((year) => year === startDate.getFullYear()) + (startDate.getMonth() + 1) / 12;

  const endDate = experience.end === 'present' ? new Date() : new Date(experience.end);
  const end = years.findIndex((year) => year === endDate.getFullYear()) + (endDate.getMonth() + 1) / 12;

  return { start, end };
};
