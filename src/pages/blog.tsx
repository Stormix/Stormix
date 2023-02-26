import React from 'react';

import Layout from '@/components/layout/main';
import Contact from '@/components/organisms/Contact';
import { useTranslation } from 'react-i18next';
import PageHero from '@/components/atoms/PageHero';
import Articles from '@/components/organisms/Articles';

const Blog = () => {
  const { t } = useTranslation();
  return (
    <Layout noNav>
      <div className="flex flex-col items-center">
        <PageHero title={t('nav.blog')} />
        <Articles />
        <Contact />
      </div>
    </Layout>
  );
};

export default Blog;
