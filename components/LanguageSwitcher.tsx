import { GlobeAltIcon } from '@heroicons/react/solid';
import { cl } from 'dynamic-class-list';
import { UIEvent, useState } from 'react';

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState('EN-US');
  const languages = ['FR-FR', 'EN-US', 'AR-AR'];

  const handleScroll = (event: UIEvent<HTMLDivElement>) => {
    console.log(event);
  };

  return (
    <div className="flex flex-row items-center justify-center gap-2">
      <GlobeAltIcon className="w-4 h-4 text-white" />
      <div>.setLang(</div>
      <div className="flex flex-col overflow-y-scroll no-scroll" onScroll={(e) => handleScroll(e)}>
        {languages.map((lang) => (
          <span
            className={cl('uppercase cursor-pointer text-secondary opacity-50', {
              'opacity-100': language === lang,
            })}
            key={lang}
          >
            {`"${lang}"`}
          </span>
        ))}
      </div>
      <div>)</div>
    </div>
  );
};

export default LanguageSwitcher;
