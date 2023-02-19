import React, { FC } from 'react';
import { Color } from '@/config/colors';
import { IEvent } from '@/types/timeline';
import Badge from '../Badge';
import { cl } from 'dynamic-class-list';

const EventCard: FC<{ event: IEvent; color: Color }> = ({ event, color }) => {
  return (
    <div className="flex flex-col gap-1 text-xs">
      <h3 className={cl('font-semibold', color.text)}>{event.position}</h3>
      <h4 className="">{event.company}</h4>
      <p className="opacity-50">
        {event.start} - {event.end}
      </p>
      <p>{event.description}</p>
      <div className="flex flex-wrap gap-1">
        {event.keywords?.map((keyword, i) => (
          <Badge key={i} color={color}>
            {keyword}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default EventCard;
