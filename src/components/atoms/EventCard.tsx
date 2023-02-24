import React, { FC } from 'react';

import { Description, Event } from '@/types/timeline';
import { formatExperienceDate } from '@/utils/dates';
import Badge from './Badge';
import { useApp } from '@/providers/AppProvider';
import { keywordToColor } from '@/utils/colors';
import { Transition } from '@headlessui/react';

const EventCard: FC<{
  event: Event;
}> = ({ event }) => {
  const { toggleKeyword, isSelected, state } = useApp();

  const showDescription = (keywords: Description['keywords']) =>
    !keywords || keywords.some((keyword) => isSelected(keyword)) || state.selectedKeywords.length === 0;
  const endDate = event.end === 'present' ? new Date() : new Date(event.end);

  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-row items-center justify-between mb-2">
        <div className="flex flex-col gap-1">
          <h3 className="font-bold text-primary">{event.position}</h3>
          <h4>
            {event.company}, {event.location}
          </h4>
        </div>
        <div>
          {formatExperienceDate(event.start)} - {formatExperienceDate(endDate)}
        </div>
      </div>
      <p className="opacity-75">{event.short_description}</p>
      <div className="flex flex-col gap-4">
        {event.descriptions?.map(({ description, keywords }, i) => (
          <Transition
            show={showDescription(keywords)}
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            key={i}
          >
            <div className="flex flex-col gap-2 pl-8">
              <div className="opacity-75"> - {description}</div>
              <div className="flex">
                {keywords?.map((keyword, j) => (
                  <Badge
                    key={j}
                    onClick={() => toggleKeyword(keyword)}
                    color={isSelected(keyword) ? keywordToColor(keyword) : undefined}
                  >
                    {keyword}
                  </Badge>
                ))}
              </div>
            </div>
          </Transition>
        ))}
      </div>
    </div>
  );
};

export default EventCard;
