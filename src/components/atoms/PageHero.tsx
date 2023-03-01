import React from 'react';
import { useTranslation } from 'react-i18next';
import ScrollDown from '@/components/atoms/ScrollDown';
import { useNavigate } from 'react-router-dom';

const PageHero: React.FC<{
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  onBack?: () => void;
}> = ({ title, subtitle, children, onBack }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <div className="flex flex-col w-11/12 gap-8 mx-auto lg:w-3/6">
        <div
          className="z-20 flex flex-row items-center cursor-pointer text-primary"
          onClick={() => (onBack ? onBack() : navigate('/'))}
        >
          <div className="relative flex items-center mr-10 back-arrow" />
          <span className="ml-2 text-xl">{t('back')}</span>
        </div>

        <h1 className="text-6xl font-bold">{title}</h1>
        <p>{subtitle ?? 'Find the latest of my writing here'}</p>
        {children}
        <ScrollDown />
      </div>
    </div>
  );
};

export default PageHero;
