import React, { FC } from 'react';
import { ReactComponent as Logo } from '@/assets/logo.svg';
import { useTranslation } from 'react-i18next';
import WorkInProgress from '@/components/atoms/WorkInProgress';
import useScrollTo from '@/hooks/useScrollTo';
import DarkModeSwitch from '../atoms/DarkModeSwitch';
import { cl } from 'dynamic-class-list';
import { useNavigate } from 'react-router-dom';

interface Path {
  name: string;
  target?: string;
}

const Header: FC<{
  className?: string;
  noNav?: boolean;
}> = ({ className, noNav }) => {
  const paths: Path[] = [
    {
      name: 'about',
    },
    {
      name: 'resume',
    },
    {
      name: 'projects',
    },
    {
      name: 'contact',
    },
    {
      name: 'blog',
      target: '/blog',
    },
  ];

  const { scrollTo } = useScrollTo();
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className={cl('fixed z-50 w-full dark:bg-background bg-background-light', className)}>
      <WorkInProgress />

      <div className="container flex items-center px-4 py-8 mx-auto lg:px-0">
        <div className="flex">
          <Logo height={30} fill="currentColor" onClick={() => scrollTo('hero')} />
        </div>

        <div className="flex-grow">
          {!noNav && (
            <nav className="justify-center hidden gap-4 lg:flex lg:flex-row">
              {paths.map(({ name, target }) => (
                <a
                  key={name}
                  className="lowercase cursor-pointer hover:text-primary"
                  onClick={() => {
                    if (!target) scrollTo(name);
                    else navigate(target);
                  }}
                >
                  {t(`nav.${name}`)}
                </a>
              ))}
            </nav>
          )}
        </div>

        <div className="flex flex-row items-center justify-end gap-4">
          {/* <LanguageSwitcher className="hidden lg:flex" /> */}
          <DarkModeSwitch />
        </div>
      </div>
    </div>
  );
};

export default Header;
