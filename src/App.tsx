import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '@/assets/styles/globals.scss';
import Home from '@/pages';
import { AppProvider } from './providers/AppProvider';

const App = () => {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </AppProvider>
  );
};

export default App;
