import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import { Router } from 'next/router'
import nProgress from 'nprogress'

import SEO from '../../next-seo.config'
import { KBar as KBarProvider } from '../components/KBar/KBar'
import { Toaster } from '../components/Toaster/Toaster'
import { globalStyles } from '../styles/Global'

Router.events.on('routeChangeStart', nProgress.start)
Router.events.on('routeChangeError', nProgress.done)
Router.events.on('routeChangeComplete', nProgress.done)

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
