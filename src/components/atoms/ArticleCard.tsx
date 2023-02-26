import { faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cl } from 'dynamic-class-list';
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const ArticleCard: FC<{
  className?: string;
}> = ({ className }) => {
  const navigate = useNavigate();
  return (
    <div
      className={cl(
        'overflow-hidden group relative rounded p-[1px] flex justify-center items-center cursor-pointer',
        className,
      )}
      onClick={() => navigate('/blog/test')}
    >
      <div className="rounded hidden group-hover:block animate-rotateColor w-[285%] h-[500%] absolute -top-[60%] -left-[50%] bg-gradient-to-r from-primary-500 via-primary-dark-200/40 to-primary-900 shadow-xl"></div>
      <div className="relative z-10 flex flex-col w-full gap-4 rounded dark:bg-primary-dark-900 bg-primary-light-400 ">
        <img src="https://placeimg.com/640/480/any" className="rounded" />
        <div className="flex flex-col gap-4 p-6 lg:px-8 lg:py-6">
          <div className="flex items-center justify-between">
            <h4 className="text-2xl font-bold group-hover:text-primary">Article name goes here</h4>
            <div className="flex items-center gap-2 opacity-35">
              <FontAwesomeIcon icon={faStopwatch} /> <span>6 min read</span>
            </div>
          </div>
          <p className="flex-grow text-sm opacity-75">Published on 12/12/2021</p>
          <p className="flex-grow text-sm opacity-75">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam...
          </p>
          <div className="flex flex-row gap-4 text-sm">
            <span className="opacity-50" title="React">
              React
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ArticleCard;
