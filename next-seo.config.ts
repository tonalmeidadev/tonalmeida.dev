import { DefaultSeoProps } from 'next-seo'

const SEO: DefaultSeoProps = {
  openGraph: {
    type: 'website',
    locale: 'pt-BR',
    siteName: 'Ton Almeida — Creative Front-end Developer'
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image'
  }
}

export default SEO
