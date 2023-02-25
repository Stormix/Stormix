import React from 'react';
import LanguageSwitcher from '@/components/atoms/LanguageSwitcher';
import { ReactComponent as Logo } from '@/assets/logo.svg';
import { useTranslation } from 'react-i18next';
import WorkInProgress from '@/components/atoms/WorkInProgress';
import useScrollTo from '@/hooks/useScrollTo';
import DarkModeSwitch from '../atoms/DarkModeSwitch';

interface Path {
  name: string;
  target: string;
}

const Header = () => {
  const paths: Path[] = [
    {
      name: 'about',
      target: '/',
    },
    {
      name: 'resume',
      target: '/resume',
    },
    {
      name: 'projects',
      target: '/projects',
    },
    {
      name: 'contact',
      target: '/contact',
    },
  ];

  const { scrollTo } = useScrollTo();
  const { t } = useTranslation();

  return (
    <div className="fixed z-50 w-full dark:bg-background bg-background-light">
      <WorkInProgress />

      <div className="container flex items-center px-4 py-8 mx-auto lg:px-0">
        <div className="flex">
          <Logo height={30} fill="currentColor" onClick={() => scrollTo('hero')} />
        </div>

        <div className="flex-grow">
          <nav className="justify-center hidden gap-4 lg:flex lg:flex-row">
            {paths.map(({ name, target }) => (
              <a key={target} className="lowercase cursor-pointer hover:text-primary" onClick={() => scrollTo(name)}>
                {t(`nav.${name}`)}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-row items-center justify-end gap-4">
          <LanguageSwitcher className="hidden lg:flex" />
          <DarkModeSwitch />
        </div>
      </div>
    </div>
  );
};

export default Header;
