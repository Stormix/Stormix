import React from 'react';
import { useTranslation } from 'react-i18next';
import { experiences } from '@/config/experiences';
import EventCard from '@/components/atoms/EventCard';
import KeywordsCloud from '../atoms/KeywordsCloud';
import { EventType } from '../../types/timeline';

const WorkExperience: React.FC = () => {
  const { t } = useTranslation();

  const workExperiences = experiences.filter((experience) => experience.type === EventType.Experience);
  const educationExperiences = experiences.filter((experience) => experience.type === EventType.Education);

  return (
    <div className="flex flex-col w-full gap-4">
      <h4 className="mb-4 text-3xl">{t('resume.workExperience.title')}</h4>
      <div className="flex flex-row w-full gap-12 px-8 py-8 dark:bg-primary-dark-900 bg-primary-light-400">
        <div className="flex flex-col w-8/12 gap-8">
          <h3 className="text-xl font-bold capitalize">{t('experiences', { count: workExperiences.length })}</h3>
          {workExperiences.map((experience, i) => (
            <EventCard event={experience} key={i} />
          ))}

          <h3 className="text-xl font-bold capitalize">{t('education', { count: educationExperiences.length })}</h3>
          {educationExperiences.map((experience, i) => (
            <EventCard event={experience} key={i} />
          ))}
        </div>
        <div className="flex flex-col w-4/12 gap-8">
          <h3 className="text-xl font-bold capitalize">{t('skill', { count: 3 })}</h3>
          <div className="flex flex-col flex-wrap gap-4">
            <KeywordsCloud />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
