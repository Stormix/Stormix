import React from 'react';

const Email: React.FC = () => {
  return (
    <div className="flex flex-col w-4 gap-4 text-white">
      <a className="-rotate-90 hover:text-primary" href="mailto:hello@stormix.co">
        hello@stormix.co
      </a>
      <div className="h-24 ml-[5px] border-l border-white" />
    </div>
  );
};

export default Email;
