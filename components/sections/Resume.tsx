import React from 'react';
import { useTranslation } from 'react-i18next';

const Resume: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-start justify-center w-3/6 h-screen gap-4">
      <h3 className="text-5xl">.resume()</h3>
      <h4 className="text-3xl">.timeline()</h4>
      <h4 className="text-3xl">.workExperience()</h4>
    </div>
  );
};

export default Resume;
