import { isDate } from 'lodash';

/**
 * Format date to be displayed in the experience section
 * @param date - Date to be formatted
 * @returns - Formatted date
 */
export const formatExperienceDate = (date: string | Date) => {
  const d = isDate(date) ? date : new Date(date);
  return d.toLocaleString('default', { month: 'long', year: 'numeric' });
};
