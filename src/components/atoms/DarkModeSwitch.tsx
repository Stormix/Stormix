import React, { useState } from 'react';
import { DarkModeSwitch as DarkModeSwitchIcon } from 'react-toggle-dark-mode';
import useDarkMode from '../../hooks/useDarkMode';

const DarkModeSwitch = () => {
  const { colorTheme, setTheme } = useDarkMode();
  const [darkMode, setDarkMode] = useState(colorTheme === 'light');

  const toggleDarkMode = (value: boolean) => {
    setTheme(colorTheme);
    setDarkMode(value);
  };
  return <DarkModeSwitchIcon checked={darkMode} onChange={toggleDarkMode} size={24} />;
};

export default DarkModeSwitch;
