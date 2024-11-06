import type { AppProps } from "next/app";

import "../styles/globals.css";
import Head from "next/head";
import { Analytics } from "../components/Analytics";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Meta tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="revisit-after" content="30 days" />
        <meta name="content-language" content="pt-br" />
        <meta name="classification" content="general" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="Catálogo de Artes da Tribalismo" />
        <meta
          property="og:description"
          content="Milhares de opções de artes e frases para você e seu grupo se inspirarem!"
        />
        <meta property="og:url" content="https://catalogo.tribalismo.com.br/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://catalogar-storage.s3.sa-east-1.amazonaws.com/user/LaqoJMFXcM2mlq5zExhC4abAQfJWFBRljbexOmWq.jpg"
        />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Catálogo da Tribalismo" />

        {/* Chrome Theme Color */}
        <meta name="theme-color" content="#fff" />
      </Head>

      {process.env.NODE_ENV !== "development" && <Analytics />}

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
