import React from 'react';
import Timeline from '@/components/atoms/Timeline';
import { useTranslation } from 'react-i18next';

const WorkTimeline: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col w-full gap-4">
      <h4 className="text-3xl">{t('resume.timeline.title')}</h4>
      <Timeline />
    </div>
  );
};

export default WorkTimeline;
