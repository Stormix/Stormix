import { useEffect } from 'react';

interface UseClickOutsideProps {
  ref: React.RefObject<HTMLElement>;
  handler: (event: MouseEvent) => void;
}

/**
 * Hook that alerts clicks outside of the passed ref
 * @param {UseClickOutsideProps} - The ref and handler to use
 * @returns {void}
 */
const useOnClickOutside = ({ ref, handler }: UseClickOutsideProps) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
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
