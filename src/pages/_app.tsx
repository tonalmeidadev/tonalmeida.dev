import type { AppProps } from 'next/app'

import { globalStyles } from '../styles/Global'

export default function App({ Component, pageProps }: AppProps) {
  globalStyles()

  return <Component {...pageProps} />
}
