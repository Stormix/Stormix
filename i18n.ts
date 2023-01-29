import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // load translation using http -> see /public/locales
  .use(Backend)
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    // Languages
    lng: 'en-us',
    fallbackLng: ['en-us', 'fr-fr', 'ar-ma'],
    lowerCaseLng: true,

    // Namespaces
    defaultNS: 'common',
    ns: ['common'],
    fallbackNS: ['general'],
    supportedLngs: ['en-us', 'fr-fr', 'ar-ma'],
    debug: false,

    // Other settings
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    // React settings
    react: {
      bindI18n: 'languageChanged editorSaved',
      bindI18nStore: '',
      transEmptyNodeValue: '',
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'b'],
      useSuspense: false, // If you notice a flash of untranslated text, set this to true
    },
  });

export default i18n;
