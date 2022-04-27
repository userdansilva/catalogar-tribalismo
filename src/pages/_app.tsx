import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { DesignProvider } from '../hooks/useDesign'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DesignProvider>
      <Component {...pageProps} />
    </DesignProvider>
  )
}

export default MyApp
