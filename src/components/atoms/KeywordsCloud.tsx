import React from 'react';

import { uniq } from 'lodash';
import { experiences } from '@/config/experiences';
import { Keyword } from '@/types/timeline';
import { keywords, KeywordType } from '@/utils/keywords';
import { useApp } from '@/providers/AppProvider';
import { keywordToColor } from '@/utils/colors';
import Badge from './Badge';

const KeywordsCloud = () => {
  const usedKeywords = uniq(experiences.flatMap((experience) => experience.keywords ?? [])) as Keyword[];
  const usedKeywordsByType = Object.values(KeywordType).reduce((acc, keywordType) => {
    acc[keywordType] = uniq(usedKeywords.filter((keyword) => (keywords[keywordType] as Keyword[]).includes(keyword)));
    return acc;
  }, {} as Record<KeywordType, Keyword[]>);

  const miscKeywords = usedKeywords.filter(
    (keyword) => !Object.values(KeywordType).some((keywordType) => usedKeywordsByType[keywordType].includes(keyword)),
  );
  usedKeywordsByType[KeywordType.Misc] = miscKeywords;

  const { toggleKeyword, isSelected } = useApp();
  return (
    <>
      {Object.values(KeywordType).map((keywordType, i) => (
        <div key={i} className="flex flex-col gap-2">
          <h4 className="font-bold">{keywordType}</h4>
          <div className="flex flex-row flex-wrap gap-2">
            {usedKeywordsByType[keywordType].map((keyword, j) => (
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
      ))}
    </>
  );
};

export default KeywordsCloud;
