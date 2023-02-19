import { useEffect } from 'react';

interface UseClickOutsideProps {
  ref: React.RefObject<HTMLElement>;
  handler: (event: MouseEvent) => void;
}

/**
 * Hook that alerts clicks outside of the passed ref
 */
const useOnClickOutside = ({ ref, handler }: UseClickOutsideProps) => {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        console.log('You clicked outside of me!');
        handler(event);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
};

export default useOnClickOutside;
