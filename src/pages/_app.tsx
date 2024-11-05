import { Fragment } from "react";
import type { AppProps } from "next/app";

import "../styles/globals.css";
import { Analytics } from "../components/Analytics";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {process.env.NODE_ENV !== "development" && <Analytics />}

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
