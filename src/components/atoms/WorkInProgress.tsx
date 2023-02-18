import React from 'react';

const WorkInProgress: React.FC = () => {
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
      <span>to stay updated...</span>
    </div>
  );
};

export default WorkInProgress;
