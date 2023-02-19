import React, { FC, ReactNode } from 'react';
import { Popover as HeadlessPopover } from '@headlessui/react';
import { cl } from 'dynamic-class-list';
import useOnClickOutside from '@/hooks/useOnClickOutside';

const Popover: FC<{ className?: string; trigger?: ReactNode; children?: ReactNode }> = ({
  className,
  children,
  trigger,
}) => {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLButtonElement>(null);

  useOnClickOutside({ ref, handler: () => setOpen(false) });

  return (
    <HeadlessPopover className={cl('relative', className)}>
      <HeadlessPopover.Button
        ref={ref}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onClick={() => setOpen(true)}
      >
        {trigger}
      </HeadlessPopover.Button>
      {open && (
        <HeadlessPopover.Panel
          className="absolute z-10 w-full py-4 pl-4 mt-2 dark:bg-background bg-background-light"
          static
        >
          {children}
        </HeadlessPopover.Panel>
      )}
    </HeadlessPopover>
  );
};

export default Popover;
