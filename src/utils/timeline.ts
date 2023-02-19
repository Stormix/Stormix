import { IExperience } from '@/types/timeline';

export const getCol = (date: string, years: number[]) => {
  const year = new Date(date).getFullYear();
  const col = years.indexOf(year) + 1;
  return col;
};

export const getColSpan = (experience: IExperience, years: number[]) => {
  const start = getCol(experience.start, years);
  const end = experience.end ? getCol(experience.end, years) : years.length;

  return {
    start,
    end,
    span: end - start + 1,
  };
};
