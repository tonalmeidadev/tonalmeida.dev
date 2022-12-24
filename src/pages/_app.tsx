import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'

import SEO from '../../next-seo.config'
import { KBar as KBarProvider } from '../components/KBar/KBar'
import { Toaster } from '../components/Toaster/Toaster'
import { globalStyles } from '../styles/Global'

export default function App({ Component, pageProps }: AppProps) {
  globalStyles()

  return (
    <KBarProvider>
      <Toaster />
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </KBarProvider>
  )
}
