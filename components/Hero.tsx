import React from 'react';
import Button from './Button';
import ScrollDown from './ScrollDown';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col h-screen -mt-24">
      <div className="flex flex-col w-3/6 m-auto">
        <div className="flex flex-row text-secondary">
          <div className="w-8 border-t border-secondary bottom-[-12px] relative" />
          <span className="ml-2">Hello World</span>
        </div>
        <div className="mt-2">
          <p className="mb-4 text-5xl">
            I&apos;m <span className="text-primary">Anas</span> Mazouni
          </p>
          <p className="text-4xl font-bold">And I like to build stuff</p>
        </div>
        <div className="mt-4 hero--intro">
          I’m a <span>software engineer</span> specialised in <span>web technologies</span> with a huge passion for{' '}
          <span>automation</span> and <span>DevOps</span>. I&apos;m passionate about sofware engineering, robotics, and
          everything in-between.{' '}
        </div>

        <div className="flex flex-row items-center gap-8 my-4">
          <Button>Download Resume</Button>
        </div>
        <ScrollDown />
      </div>
    </div>
  );
};

export default Hero;
