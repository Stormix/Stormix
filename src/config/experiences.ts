import { Event, EventType } from '@/types/timeline';
import { flatMap } from 'lodash';

/**
 * The experiences to display in the timeline
 * @type {Event[]}
 *
 * @Todo: move this to a database
 */
export const experiences: Event[] = [
  {
    company: 'Metamaze',
    position: 'Full Stack Engineer',
    start: '2021-11-01',
    end: 'present',
    location: 'Remote (Belgium)',
    short_description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    descriptions: [
      {
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        keywords: ['Typescript'],
      },
      {
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        keywords: ['React', 'GraphQL (Apollo)'],
      },
    ],
    keywords: ['Typescript', 'MongoDB', 'React', 'Node (Express)', 'GraphQL (Apollo)', 'StencilJs'],
  },
  {
    company: 'Yogalive',
    position: 'Lead Developer',
    start: '2020-04-01',
    location: 'Remote (Belgium)',
    end: '2021-11-01',
    short_description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    descriptions: [
      {
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        keywords: ['Typescript'],
      },
      {
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        keywords: ['React', 'GraphQL (Apollo)'],
      },
    ],
    keywords: ['Typescript', 'MongoDB', 'Vue 3', 'Express'],
  },
  {
    company: 'Freelance',
    position: 'Software Developer',
    start: '2015-12-01',
    end: '2020-03-01',
    location: 'Remote (France / Morocco)',
    short_description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    descriptions: [
      {
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        keywords: ['Typescript'],
      },
      {
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        keywords: ['React', 'GraphQL (Apollo)'],
      },
    ],
    keywords: ['Typescript', 'MongoDB', 'Vue 2', 'PHP', 'Laravel', 'Node', 'Express', 'GraphQL (Apollo)'],
  },
  {
    company: 'Coment',
    position: 'Intern',
    start: '2019-07-01',
    end: '2019-08-01',
    location: 'France',
    short_description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    descriptions: [
      {
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        keywords: ['Typescript'],
      },
      {
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        keywords: ['React', 'GraphQL (Apollo)'],
      },
    ],
    keywords: ['Typescript', 'MongoDB', 'Vue 2', 'Node', 'Express', 'Wordpress', 'Docker', 'GCP'],
  },
].map((experience) => ({
  ...experience,
  type: EventType.Experience,
  keywords: experience.keywords ?? flatMap(experience.descriptions?.flatMap((desc) => desc.keywords)),
}));
