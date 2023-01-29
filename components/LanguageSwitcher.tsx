import { GlobeAltIcon } from '@heroicons/react/solid';
import { cl } from 'dynamic-class-list';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const i18nLanguages = ((i18n.languages as string[]) ?? []).sort((a, b) => a.localeCompare(b));

  const [languages, setLanguages] = useState(() => i18nLanguages);

  const roll = (array: readonly string[], direction: number, steps: number) => {
    const newArray: string[] = [];
    for (let i = 0; i < array.length; i++) {
      const temp = i + steps * direction;
      const index = temp >= 0 ? temp % array.length : array.length + temp;
      newArray.push(array[index]);
    }
    return newArray;
  };

  const onSelectLanguage = (language: string) => {
    const languageIdx = languages.indexOf(language);
    const middleIdx = Math.floor(languages.length / 2);
    const newLanguages: string[] = roll(languages, languageIdx - middleIdx, 1);

    setLanguages(newLanguages);
    i18n.changeLanguage(language);
  };

  // Set body dir based on language
  useEffect(() => {
    document.body.dir = i18n.language == 'ar-ma' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  return (
    <div className="flex flex-row items-center justify-center gap-2">
      <GlobeAltIcon className="w-4 h-4 text-white" />
      <div>.setLang(</div>
      <div className="flex flex-col overflow-y-scroll no-scroll">
        {languages.map((lang) => (
          <span
            className={cl('uppercase cursor-pointer text-secondary', {
              'opacity-100': lang == i18n.language,
              'opacity-20': lang != i18n.language,
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
