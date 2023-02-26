import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '@/assets/styles/globals.scss';
import Home from '@/pages';
import { AppProvider } from './providers/AppProvider';
import Blog from './pages/blog';
import Article from './pages/article';

const App = () => {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Article />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </AppProvider>
  );
};

export default App;
