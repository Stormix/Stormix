import { useEffect } from 'react';
import CookieConsentInit, { isConsentReceived } from '@/utils/cookieconsent';

interface CookieConsentProps {
  isPreview: boolean;
  path: string;
}

export const CookieConsent = ({ isPreview, path }: CookieConsentProps): null => {
  useEffect(() => {
    if (!isPreview) {
      CookieConsentInit();
    }
  }, [isPreview]);

  useEffect(() => {
    if (!isPreview && isConsentReceived()) {
      // add cookie consent dependent code that should run any time the page is rendered
    }
  }, [path, isPreview]);

  return null;
};
