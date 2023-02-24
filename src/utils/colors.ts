import { colors } from '@/config/colors';

/**
 * Get a color from the colors array based on the keyword
 * @param keyword - The keyword to get the color for
 * @returns The color for the keyword
 */
export const keywordToColor = (keyword: string) => {
  const hash = keyword
    .split('')
    .map((char) => char.charCodeAt(0))
    .reduce((acc, curr) => acc + curr, 0);
  const index = hash % colors.length;
  return colors[index];
};
