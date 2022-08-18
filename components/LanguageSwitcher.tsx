import { GlobeAltIcon } from '@heroicons/react/solid';
import { cl } from 'dynamic-class-list';
import { useState } from 'react';

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState('EN-US');
  const [languages, setLanguages] = useState(['AR-MA', 'EN-US', 'FR-FR']);

  const roll = (array: string[], direction: number, steps: number) => {
    const newArray: string[] = [];
    for (let i = 0; i < array.length; i++) {
      const temp = i + steps * direction;
      const index = temp >= 0 ? temp % array.length : array.length + temp;
      newArray.push(array[index]);
    }
    return newArray;
  };

  const onSelectLanguage = (language: string) => {
    const lIndex = languages.indexOf(language);
    const middleIndex = Math.floor(languages.length / 2);
    const newLanguages: string[] = roll(languages, lIndex - middleIndex, 1);

    setLanguages(newLanguages);
    setLanguage(language);
  };

  return (
    <div className="flex flex-row items-center justify-center gap-2">
      <GlobeAltIcon className="w-4 h-4 text-white" />
      <div>.setLang(</div>
      <div className="flex flex-col overflow-y-scroll no-scroll">
        {languages.map((lang) => (
          <span
            className={cl('uppercase cursor-pointer text-secondary opacity-50', {
              'opacity-100': language === lang,
            })}
            key={lang}
            onClick={() => onSelectLanguage(lang)}
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
