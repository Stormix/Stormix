import React, { FC } from 'react';

import useArticle from '@/hooks/useArticle';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { format, parseISO } from 'date-fns';
import { cl } from 'dynamic-class-list';
import { useNavigate } from 'react-router-dom';
import { Article } from '@/types/blog';
import ImageLazyLoad from './ImageLazyLoad';

const ArticleCard: FC<{
  className?: string;
  article: Article;
}> = ({ className, article }) => {
  const navigate = useNavigate();
  const {
    article: { attributes, readingTime, keywords },
  } = useArticle(article);

  return (
    <div
      className={cl(
        'overflow-hidden group relative rounded p-[1px] flex justify-center items-center cursor-pointer',
        className,
      )}
      onClick={() => navigate(`/blog/${attributes?.slug}`)}
    >
      <div className="rounded hidden group-hover:block animate-rotateColor w-[285%] h-[500%] absolute -top-[60%] -left-[50%] bg-gradient-to-r from-primary-500 via-primary-dark-200/40 to-primary-900 shadow-xl"></div>
      <div className="relative z-10 flex flex-col w-full gap-4 rounded dark:bg-primary-dark-900 bg-primary-light-400">
        <ImageLazyLoad
          src={`https://cms.stormix.co${attributes?.cover?.data?.attributes?.url ?? ''}`}
          blurHash={attributes?.cover?.data?.attributes?.blurhash ?? ''}
          alt={attributes?.title ?? ''}
        />
        <div className="flex flex-col gap-4 p-6 lg:px-8 lg:py-6">
          <div className="flex items-center justify-between">
            <h4 className="text-2xl font-bold group-hover:text-primary">{attributes?.title}</h4>
            <div className="flex items-center gap-2 opacity-35">
              <FontAwesomeIcon icon={faStopwatch} /> <span>{readingTime} min read</span>
            </div>
          </div>
          {attributes?.publishedAt && (
            <p className="flex-grow text-sm opacity-75">
              Published on {format(parseISO(attributes?.publishedAt), 'yyyy-MM-dd HH:mm')}
            </p>
          )}
          <p className="flex-grow text-sm opacity-75">{attributes?.description}</p>
          <div className="flex flex-row gap-4 text-sm">
            {keywords.map((keyword, key) => (
              <span key={key} className="opacity-50" title="React">
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ArticleCard;
