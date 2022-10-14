import { Fragment } from 'react'
import type { AppProps } from 'next/app'

import { DesignProvider } from '../hooks/useDesign'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <DesignProvider>
        <Component {...pageProps} />
      </DesignProvider>
    </Fragment>
  )
}

export default MyApp
