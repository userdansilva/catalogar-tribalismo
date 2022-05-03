import { Fragment } from 'react'
import type { AppProps } from 'next/app'

import { DesignProvider } from '../hooks/useDesign'

import { Analytics } from '../components/Analytics'

import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Analytics />
      <DesignProvider>
        <Component {...pageProps} />
      </DesignProvider>
    </Fragment>
  )
}

export default MyApp
