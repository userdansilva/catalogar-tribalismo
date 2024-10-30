import { Fragment } from 'react'
import type { AppProps } from 'next/app'

import '../styles/globals.css'
import { Analytics } from '../components/Analytics'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      {process.env.NODE_ENV !== 'development' && <Analytics />}

      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
