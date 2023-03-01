import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import { BrowserRouter } from 'react-router-dom';
import TagManager from 'react-gtm-module';

import '@/i18n';

TagManager.initialize({
  gtmId: 'GTM-KW6JJTB',
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
