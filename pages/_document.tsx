import Favicon from '@/components/util/Favicon';
import Document, { Head, Html, Main, NextScript, DocumentContext } from 'next/document';
import { GA_ID } from '@/components/util/gtag';
import { ColorModeScript } from '@chakra-ui/react';
import { CustomTheme } from '@/components/util/chakraGlobalSettings';

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<Record<string, unknown> & { html: string }> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <Favicon />
          {/* Google Analytics */}
          {GA_ID && (
            <>
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                   window.dataLayer = window.dataLayer || [];
                   function gtag(){dataLayer.push(arguments);}
                   gtag('js', new Date());
                   gtag('config', '${GA_ID}', {
                     page_path: window.location.pathname,
                   });`
                }}
              />
            </>
          )}
        </Head>
        <body>
          <ColorModeScript initialColorMode={CustomTheme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
