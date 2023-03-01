import React, { FC } from 'react';

import { useTranslation } from 'react-i18next';
import PageHero from '@/components/atoms/PageHero';
import Layout from '@/components/layout/main';
import Contact from '@/components/organisms/Contact';
import ScrollToTop from '@/components/atoms/ScrollToTop';
import { StringFilterInput, useArticleByIdQuery } from '../types/gql';
import { useParams } from 'react-router-dom';
import useArticle from '../hooks/useArticle';
import ImageLazyLoad from '../components/atoms/ImageLazyLoad';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { format, parseISO } from 'date-fns';
import { DiscussionEmbed } from 'disqus-react';

const Article: FC = () => {
  const { t } = useTranslation();
  const { slug } = useParams();
  // Go back to last page
  const goBack = () => window.history.back();
  const { data } = useArticleByIdQuery({
    variables: {
      slug: {
        eq: slug,
      } as StringFilterInput,
    },
    skip: !slug,
  });
  const {
    article: { attributes, content, readingTime },
  } = useArticle(data?.articles?.data?.[0] ?? null);

  return (
    <Layout noNav>
      <ScrollToTop />
      <div className="flex flex-col items-center">
        <PageHero title={attributes?.title ?? ''} subtitle={attributes?.description ?? ''} onBack={() => goBack()}>
          <div className="flex flex-row gap-4">
            {attributes?.publishedAt && (
              <p className="flex-grow text-sm opacity-75">
                Published on {format(parseISO(attributes?.publishedAt), 'yyyy-MM-dd HH:mm')}
              </p>
            )}
            <div className="flex items-center gap-2 opacity-35">
              <FontAwesomeIcon icon={faStopwatch} /> <span>{readingTime} min read</span>
            </div>
          </div>
        </PageHero>

        <ImageLazyLoad
          src={`https://cms.stormix.co${attributes?.cover?.data?.attributes?.url ?? ''}`}
          blurHash={attributes?.cover?.data?.attributes?.blurhash ?? ''}
          alt={attributes?.title ?? ''}
          className="w-11/12 lg:w-3/6"
        />
        <div className="flex flex-col items-center justify-center w-11/12 lg:w-3/6 py-14" id="about">
          <div className="z-10 flex flex-col gap-4 mt-24 text-justify">
            <ReactMarkdown skipHtml={false}>{content ?? ''}</ReactMarkdown>
          </div>
        </div>
        <div className="w-11/12 lg:w-3/6">
          <DiscussionEmbed
            shortname="stormix-1"
            config={{
              url: `https://stormix.co/blog/${attributes?.slug ?? ''}`,
              identifier: attributes?.slug ?? '',
              title: attributes?.title ?? '',
              language: 'en_US',
            }}
          />
        </div>
        <Contact />
      </div>
    </Layout>
  );
};

export default Article;
