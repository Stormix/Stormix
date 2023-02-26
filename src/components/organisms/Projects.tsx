import React from 'react';
import ProjectCard from '@/components/atoms/ProjectCard';
import Button from '../atoms/Button';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const projects: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center w-full gap-4 my-24" id="projects">
      <h3 className="text-5xl">.projects()</h3>
      <p>Here are some of my projects</p>
      <div className="grid w-11/12 grid-cols-1 gap-6 my-12 lg:grid-cols-3 lg:w-10/12">
        {projects.map((project, i) => (
          <ProjectCard key={i} />
        ))}
      </div>
      <Button>{t('show-more')}</Button>
    </div>
  );
};

export default Projects;
