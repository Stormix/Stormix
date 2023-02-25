import { cl } from 'dynamic-class-list';
import React from 'react';

const Email: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cl('flex-col hidden w-4 gap-4 lg:flex', className)}>
      <a className="text-sm -rotate-90 hover:text-primary" href="mailto:hello@stormix.co">
        hello@stormix.co
      </a>
      <div className="h-16 ml-[5px] border-l dark:border-background-light border-background" />
    </div>
  );
};

export default Email;
