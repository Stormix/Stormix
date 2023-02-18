import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(HttpBackend)
  .init({
    // https://www.i18next.com/overview/configuration-options#logging
    debug: false,

    /**
     * @link https://github.com/i18next/next-i18next#6-advanced-configuration
     */
    // Namespaces
    defaultNS: 'common',
    ns: ['common'],
    fallbackNS: ['general'],
    lowerCaseLng: true,
    load: 'currentOnly',
    supportedLngs: ['en-us', 'fr-fr', 'ar-ma'],
    fallbackLng: 'en-us',

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

    // Detector
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      lookupQuerystring: 'lng',
      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng',
      lookupFromPathIndex: 0,
      lookupFromSubdomainIndex: 0,
      caches: ['localStorage', 'cookie'],
      excludeCacheFor: ['cimode'],
    },

    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;
