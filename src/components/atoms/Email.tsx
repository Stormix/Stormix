import React from 'react';

const Email: React.FC = () => {
  return (
    <div className="flex-col hidden w-4 gap-4 md:flex">
      <a className="-rotate-90 hover:text-primary" href="mailto:hello@stormix.co">
        hello@stormix.co
      </a>
      <div className="h-24 ml-[5px] border-l dark:border-background-light border-background" />
    </div>
  );
};

export default Email;
