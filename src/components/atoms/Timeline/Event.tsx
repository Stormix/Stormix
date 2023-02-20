import React, { CSSProperties, FC } from 'react';
import { IEvent } from '@/types/timeline';
import { cl } from 'dynamic-class-list';
import { sample } from 'lodash';
import Popover from './Popover';
import EventCard from './EventCard';
import { Color, colors } from '@/config/colors';

const Event: FC<{ experience: IEvent; style: CSSProperties; className?: string }> = ({
  experience,
  className,
  style,
}) => {
  const color = sample(colors) as Color;

  return (
    <div className={cl(className, 'flex flex-col text-xs border-b-8 pb-2', color?.border)} style={style}>
      <Popover
        trigger={
          <>
            {experience.position} - {experience.company}
          </>
        }
      >
        <EventCard event={experience} color={color} />
      </Popover>
    </div>
  );
};

export default Event;
