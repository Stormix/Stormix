import Document, { Html, Head, Main, NextScript } from 'next/document';
import WorkInProgress from '../components/WorkInProgress';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap" rel="stylesheet" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <WorkInProgress />

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
