import { format } from 'date-fns';
import React from 'react';

declare const __COMMIT_HASH__: string;
declare const __COMMIT_TIMESTAMP__: string;

const WorkInProgress: React.FC = () => {
  const timestamp = format(new Date(Number(__COMMIT_TIMESTAMP__) * 1000), 'dd/MM/yyyy HH:mm:ss');
  return (
    <div className="flex items-center gap-2 px-4 py-2 dark:bg-primary-dark-800 bg-primary-light-400">
      <span>Still a work in progress. Follow me on </span>
      <a
        title="Twitter profile"
        target="_blank"
        className="text-primary"
        href="https://twitter.com/Stormix_co"
        rel="noreferrer"
      >
        @Stormix_co
      </a>
      <span className="flex-grow">to stay updated...</span>

      <span>
        Last commit -{' '}
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
