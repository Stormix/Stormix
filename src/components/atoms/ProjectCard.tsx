import React, { FC } from 'react';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cl } from 'dynamic-class-list';

const ProjectCard: FC<{
  className?: string;
}> = ({ className }) => {
  return (
    <div
      className={cl(
        'overflow-hidden group relative rounded p-[1px] flex justify-center items-center cursor-pointer',
        className,
      )}
    >
      <div className="rounded hidden group-hover:block animate-rotateColor w-[285%] h-[500%] absolute -top-[60%] -left-[50%] bg-gradient-to-r from-primary-500 via-primary-dark-200/40 to-primary-900 shadow-xl"></div>
      <div className="relative z-10 flex flex-col w-full gap-4 p-6 rounded dark:bg-primary-dark-900 bg-primary-light-400 lg:px-8 lg:py-6">
        <div className="flex items-center justify-between">
          <h4 className="text-2xl font-bold group-hover:text-primary">Project Name</h4>
          <div className="flex gap-4">
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </div>
        </div>
        <p className="flex-grow my-4 text-sm opacity-75">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam.
        </p>
        <div className="flex flex-row gap-4 text-sm">
          <span className="opacity-50" title="React">
            React
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
