import { useMemo } from 'react';
import { Article } from '@/types/blog';
import { ComponentSharedRichText } from '@/types/gql';

const useArticle = (article: Article | null) => {
  const content = useMemo(() => {
    if (!article?.attributes?.blocks) return null;

    const blocks = article?.attributes?.blocks;

    const content =
      blocks
        .map((block) => {
          if (block?.__typename === 'ComponentSharedRichText') {
            return (block as ComponentSharedRichText).body ?? '';
          }
        })
        .join('\n') ?? '';
    return content;
  }, [article?.attributes?.blocks]);

  const readingTime = useMemo(() => {
    if (!content) return 0;

    const wordsPerMinute = 200;
    const noOfWords = content.split(/\s/g).length;
    const minutes = noOfWords / wordsPerMinute;
    const readTime = Math.ceil(minutes);

    return readTime;
  }, [content]);

  const keywords = useMemo(
    () =>
      (article?.attributes?.keywords?.data?.map((keyword) => keyword?.attributes?.name)?.filter(Boolean) ??
        []) as string[],
    [article?.attributes?.keywords?.data],
  );

  return {
    article: {
      ...article,
      content,
      readingTime,
      keywords,
    },
  };
};

export default useArticle;
