import { format } from 'date-fns';
import React from 'react';

declare const __COMMIT_HASH__: string;
declare const __COMMIT_TIMESTAMP__: string;

const WorkInProgress: React.FC = () => {
  const timestamp = format(new Date(Number(__COMMIT_TIMESTAMP__) * 1000), 'dd/MM/yyyy HH:mm:ss');
  return (
    <div className="flex flex-col gap-2 px-4 py-2 dark:bg-primary-dark-800 bg-primary-light-400 lg:flex-row lg:items-center">
      <span className="flex-grow">Still a work in progress. Still need to finish the copy writing.</span>
      <span className="hidden gap-2 lg:flex">
        Last commit{' '}
        <a
          target="_blank"
          className="text-primary"
          href={`https://github.com/Stormix/Stormix/commit/${__COMMIT_HASH__}`}
          rel="noreferrer"
        >
          {__COMMIT_HASH__}
        </a>{' '}
        at <b>{timestamp}</b>
      </span>
    </div>
  );
};

export default WorkInProgress;
