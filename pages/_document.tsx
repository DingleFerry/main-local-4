
import Document, { Html, Head, Main, NextScript } from "next/document";

import { GA_TRACKING_ID } from "../utils/gtag";

export default class MyDocument extends Document {

  render() {
    
    return (
      <Html>
        <Head>

        <meta property="og:title" content={`Bear Market Assholes`} />
        <meta property="og:image" content={'https://brownlist.imgix.net/social-image.png/'} />
        <meta property="og:image:secure_url" content={'https://brownlist.imgix.net/social-image.png/'} />
        <meta property="og:image:width" content="2069" />
        <meta property="og:image:height" content="1034.5" />

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
          `
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}