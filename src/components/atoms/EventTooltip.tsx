import React, { FC } from 'react';
import { Color } from '@/config/colors';
import { Event } from '@/types/timeline';
import Badge from './Badge';
import { cl } from 'dynamic-class-list';

const EventTooltip: FC<{ event: Event; color: Color }> = ({ event, color }) => {
  return (
    <div className="flex flex-col gap-1 text-xs">
      <h3 className={cl('font-semibold', color.text)}>{event.position}</h3>
      <h4 className="font-bold">{event.company}</h4>
      <p className="opacity-50">
        {event.start} - {event.end}
      </p>
      <p>{event.short_description}</p>
      <div className="flex flex-wrap gap-1 mt-2">
        {event.keywords?.map((keyword, i) => (
          <Badge key={i} color={color}>
            {keyword}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default EventTooltip;
