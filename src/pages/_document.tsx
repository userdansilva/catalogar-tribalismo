import Document, {
  Html, Head, Main, NextScript,
} from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link
            href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap"
            rel="stylesheet"
          />

          {/* Meta tags */}
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <meta name="revisit-after" content="30 days" />
          <meta name="content-language" content="pt-br" />
          <meta name="classification" content="general" />
          <meta name="robots" content="index, follow" />

          {/* Favicon */}
          <link rel="shortcut icon" href="/favicon.png" type="image/x-ico; charset=binary" />
          <link rel="icon" href="/favicon.png" type="image/x-ico; charset=binary" />

          {/* Open Graph */}
          <meta property="og:title" content="Catálogo de Artes da Tribalismo" />
          <meta
            property="og:description"
            content="Milhares de opções de artes e frases para você e seu grupo se inspirarem!"
          />
          <meta property="og:url" content="https://tribalismo.catalogar.com.br/" />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://catalogar-storage.s3.sa-east-1.amazonaws.com/user/LaqoJMFXcM2mlq5zExhC4abAQfJWFBRljbexOmWq.jpg"
          />
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:site_name" content="Tribalismo" />

          {/* Chrome Theme Color */}
          <meta name="theme-color" content="#fff" />
        </Head>
        <body>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-K6PVMH8"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
