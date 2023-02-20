import React from 'react';
import { useTranslation } from 'react-i18next';

const WorkExperience: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col w-full">
      <h4 className="mb-4 text-3xl">{t('resume.workExperience.title')}</h4>
      <div className="flex flex-row w-full gap-4 px-4 py-4 dark:bg-primary-dark-900 bg-primary-light-400">
        <div className="flex flex-col w-8/12">
          <h3 className="text-xl font-bold">Experiences[]</h3>
        </div>
        <div className="flex flex-col w-4/12">
          <h3 className="text-xl font-bold">Skills[]</h3>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
