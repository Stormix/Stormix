import React from 'react';
import { useTranslation } from 'react-i18next';
import Timeline from '../atoms/Timeline';

const Resume: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-start justify-center w-10/12 h-screen gap-4" id="resume">
      <h3 className="text-5xl">{t('resume.resume.title')}</h3>
      <h4 className="text-3xl">{t('resume.timeline.title')}</h4>
      <Timeline />
      <h4 className="text-3xl">{t('resume.workExperience.title')}</h4>
    </div>
  );
};

export default Resume;
