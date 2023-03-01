import React, { FC } from 'react';
import { useArticlesQuery } from '../../types/gql';
import ArticleCard from '../atoms/ArticleCard';

const Articles: FC = () => {
  const { data } = useArticlesQuery({
    variables: {},
  });

  return (
    <div className="flex flex-col justify-center w-full">
      <h2 className="mb-20 text-4xl text-center">Articles</h2>
      <div className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-2">
        {(data?.articles?.data ?? []).map((article, i) => (
          <ArticleCard key={i} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Articles;
