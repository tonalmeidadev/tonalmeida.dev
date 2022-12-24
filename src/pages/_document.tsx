import Document, { Html, Head, Main, NextScript } from 'next/document'

import { getCssText } from '../../stitches.config'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta httpEquiv="cache-control" content="public" />
          <link rel="icon" type="image/webp" href="/assets/favicon.webp" />
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
