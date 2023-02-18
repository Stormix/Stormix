import { cl } from 'dynamic-class-list';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Language } from '@/types/language';
import React from 'react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const [languages, setLanguages] = useState(() => Object.values(Language).sort((a, b) => a.localeCompare(b)));

  const roll = (array: readonly Language[], direction: number, steps: number) => {
    const newArray: string[] = [];
    for (let i = 0; i < array.length; i++) {
      const temp = i + steps * direction;
      const index = temp >= 0 ? temp % array.length : array.length + temp;
      newArray.push(array[index]);
    }
    return newArray;
  };

  const onSelectLanguage = (language: Language) => {
    const languageIdx = languages.indexOf(language);
    const middleIdx = Math.floor(languages.length / 2);
    const newLanguages = roll(languages, languageIdx - middleIdx, 1) as Language[];

    setLanguages(newLanguages);
    i18n.changeLanguage(language);
    localStorage.setItem('i18nextLng', language);
  };

  // Set body dir based on language
  useEffect(() => {
    // Change language direction
    document.body.dir = i18n.language == Language.Arabic ? 'rtl' : 'ltr';
    // Change primary font based on language
    document.documentElement.style.setProperty(
      '--primary-font',
      i18n.language == Language.Arabic ? '"Noto Kufi Arabic", sans-serif' : '"Roboto Mono", monospace',
    );
  }, [i18n.language]);

  // Set initial language
  useEffect(() => {
    const language = localStorage.getItem('i18nextLng') as Language;
    if (language) {
      onSelectLanguage(language);
    } else {
      onSelectLanguage(Language.English);
    }
  }, []);
  return (
    <div className="flex flex-row items-center justify-center gap-2">
      <div>.setLang(</div>
      <div className="flex flex-col overflow-y-scroll no-scroll">
        {languages.map((lang) => (
          <span
            className={cl('uppercase cursor-pointer text-primary', {
              'opacity-100': lang == i18n.language,
              'opacity-25': lang != i18n.language,
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
