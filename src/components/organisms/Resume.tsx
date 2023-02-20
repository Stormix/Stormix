import React from 'react';
import { useTranslation } from 'react-i18next';
import WorkExperience from '@/components/molecules/WorkExperience';
import WorkTimeline from '@/components/molecules/WorkTimeline';

const Resume: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-start justify-center w-10/12 h-screen gap-4" id="resume">
      <h3 className="mb-4 text-5xl">{t('resume.resume.title')}</h3>
      <WorkTimeline />
      <WorkExperience />
    </div>
  );
};

export default Resume;
