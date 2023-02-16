import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './assets/styles/globals.scss';
import Home from './pages';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
