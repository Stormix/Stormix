import React, { FC } from 'react';
import ArticleCard from '../atoms/ArticleCard';

const Articles: FC = () => {
  const articles = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="flex flex-col justify-center w-full">
      <h2 className="mb-20 text-4xl text-center">Articles</h2>
      <div className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-2">
        {articles.map((article, i) => (
          <ArticleCard key={i} />
        ))}
      </div>
    </div>
  );
};

export default Articles;
