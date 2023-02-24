import React from 'react';
import { useTranslation } from 'react-i18next';
import Experiences from '@/components/molecules/ExperiencesAndEducation';
import Timeline from '../molecules/Timeline';

const Resume: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col w-10/12 gap-8 mt-20" id="resume">
      <h3 className="mb-4 text-5xl">{t('resume.resume.title')}</h3>
      <div className="flex flex-col w-full gap-4">
        <h4 className="text-3xl">{t('resume.timeline.title')}</h4>
        <Timeline />
      </div>
      <Experiences />
    </div>
  );
};

export default Resume;
