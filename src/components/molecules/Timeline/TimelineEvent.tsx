import React from 'react';

import EventTooltip from '@/components/atoms/EventTooltip';
import Popover from '@/components/atoms/Popover';
import { Color, colors } from '@/config/colors';
import { Event } from '@/types/timeline';
import { cl } from 'dynamic-class-list';
import { sample } from 'lodash';
import { CSSProperties, FC } from 'react';

const TimelineEvent: FC<{ experience: Event; style: CSSProperties; className?: string }> = ({
  experience,
  className,
  style,
}) => {
  const color = sample(colors) as Color;

  return (
    <div
      className={cl(className, 'flex flex-col w-full text-xs align-bottom border-b-8 pb-2', color?.border)}
      style={style}
    >
      <Popover
        trigger={
          <div className="flex flex-col items-start">
            <span>{experience.position}</span>
            <span className="font-bold">{experience.company}</span>
          </div>
        }
      >
        <EventTooltip event={experience} color={color} />
      </Popover>
    </div>
  );
};

export default TimelineEvent;
