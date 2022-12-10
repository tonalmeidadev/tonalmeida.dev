import Document, { Html, Head, Main, NextScript } from 'next/document'

import { getCssText } from '../../stitches.config'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta name="language" content="pt-BR" />
          <meta name="author" content="Ton Almeida" />
          <meta property="og:type" content="page" />
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:url" content="https://tonalmeida.dev" />
          <meta property="og:article:author" content="Ton Almeida" />
          <meta httpEquiv="cache-control" content="public" />
          <meta property="og:article:author" content="Ton Almeida" />
          <link rel="icon" type="image/webp" href="/assets/favicon.webp" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Sora:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
