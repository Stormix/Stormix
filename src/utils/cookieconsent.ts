declare global {
  interface Window {
    cookieconsent?: {
      status: {
        allow: 'allow';
        deny: 'deny';
        dismiss: 'dismiss';
      };
      initialise(
        config: {
          [key: string]: unknown;
          onInitialise(status: keyof Required<Window>['cookieconsent']['status']): void;
          onStatusChange(status: keyof Required<Window>['cookieconsent']['status']): void;
        },
        complete: (popup: Required<Window>['cookieconsent']['Popup']) => void,
      ): void;
      utils: {
        getCookie(name: string): string;
      };
      Popup: unknown;
    };
  }
}

const COOKIE_CONSENTS_EXPIRATION_VALUE = 28; // Days

export const isConsentReceived = (): boolean => {
  const { cookieconsent } = window || {};

  return !!cookieconsent && cookieconsent.utils.getCookie('cookieconsent_status') === cookieconsent.status.allow;
};

let isConsentInitialised = false;

const CookieConsentInit = (): void => {
  if (isConsentInitialised) return;

  window.cookieconsent?.initialise?.(
    {
      palette: {
        popup: {
          background: '#000',
        },
        button: {
          background: '#f1d600',
        },
      },
      cookie: {
        expiryDays: COOKIE_CONSENTS_EXPIRATION_VALUE,
      },
      showLink: false,
      type: 'opt-in',
      onInitialise: (status) => {
        if (status === window.cookieconsent?.status.allow) {
          // add cookie consent dependent code that should run on start up
        }
      },
      onStatusChange: (status) => {
        if (status === window.cookieconsent?.status.allow) {
          // add cookie consent dependent code that should run any time the status is changed
        }
      },
    },
    (popup) => {
      isConsentInitialised = !!popup;
    },
  );
};

export default CookieConsentInit;
