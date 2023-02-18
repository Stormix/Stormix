import { cl } from 'dynamic-class-list';
import React, { useRef } from 'react';
import { SCROLL_CUTOFF } from '@/config/scroll';

const ScrollDown = () => {
  const [hidden, setHidden] = React.useState(false);
  const scroll = useRef<HTMLDivElement>(null);

  // Hide the scroll down button when the user scrolls down
  React.useEffect(() => {
    const handleScroll = () => {
      if (scroll.current) {
        const { top } = scroll.current.getBoundingClientRect();
        setHidden(top < SCROLL_CUTOFF);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div
        className={cl('scroll-down', {
          'opacity-0': hidden,
        })}
        ref={scroll}
      />
      <div
        className={cl('absolute z-10 self-center text-xs cursor-pointer bottom-6', {
          'opacity-0': hidden,
          'animate-pulse': !hidden,
        })}
      >
        Scroll
      </div>
    </>
  );
};

export default ScrollDown;
