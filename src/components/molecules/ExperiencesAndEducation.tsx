import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { experiences } from '@/config/experiences';
import EventCard from '@/components/atoms/EventCard';
import KeywordsCloud from '../atoms/KeywordsCloud';
import { EventType } from '../../types/timeline';
import { Tab } from '@headlessui/react';
import { cl } from 'dynamic-class-list';

const WorkExperience: React.FC = () => {
  const { t } = useTranslation();

  const workExperiences = experiences.filter((experience) => experience.type === EventType.Experience);
  const educationExperiences = experiences.filter((experience) => experience.type === EventType.Education);

  return (
    <div className="flex flex-col w-full gap-4">
      <h4 className="mb-4 text-3xl">{t('resume.workExperience.title')}</h4>
      <div className="flex flex-col-reverse w-full gap-8 md:flex-row">
        <div className="flex flex-col w-full p-4 rounded md:w-8/12 dark:bg-primary-dark-900 bg-primary-light-400 md:p-6">
          <Tab.Group>
            <Tab.List className={'flex justify-between md:justify-start md:gap-4 w-full'}>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <h3
                    className={cl(
                      'text-xl font-bold focus:outline-none capitalize py-4 px-4 md:pr-8 md:pb-4 md:pl-0 md:pt-0 cursor-pointer',
                      {
                        'border-b-2 border-primary-dark dark:border-primary-light': selected,
                      },
                    )}
                  >
                    {t('experiences', { count: workExperiences.length })}
                  </h3>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <h3
                    className={cl(
                      'text-xl font-bold focus:outline-none capitalize py-4 px-4 md:pr-8 md:pb-4 md:pl-0 md:pt-0 cursor-pointer',
                      {
                        'border-b-2 border-primary-dark dark:border-primary-light': selected,
                      },
                    )}
                  >
                    {t('education')}
                  </h3>
                )}
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel className={'flex flex-col pt-4 gap-8'}>
                {workExperiences.map((experience, i) => (
                  <EventCard event={experience} key={i} />
                ))}
              </Tab.Panel>
              <Tab.Panel className={'flex flex-col pt-4 gap-8'}>
                {educationExperiences.map((experience, i) => (
                  <EventCard event={experience} key={i} />
                ))}
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
        <div className="flex flex-col w-full gap-8 p-4 rounded h-fit md:w-4/12 dark:bg-primary-dark-900 bg-primary-light-400 md:p-6">
          <h3 className="text-xl font-bold capitalize">
            <span className="py-4 border-b-2 ">{t('skill', { count: 3 })}</span>
          </h3>
          <div className="flex flex-col flex-wrap gap-4">
            <KeywordsCloud />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
