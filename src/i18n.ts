import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // https://www.i18next.com/overview/configuration-options#logging
    debug: false,

    /**
     * @link https://github.com/i18next/next-i18next#6-advanced-configuration
     */
    // saveMissing: false,
    // strictMode: true,
    // serializeConfig: false,
    // react: { useSuspense: false }
    // Namespaces
    defaultNS: 'common',
    ns: ['common'],
    fallbackNS: ['general'],
    supportedLngs: ['en-US', 'fr-FR', 'ar-MA'],

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
