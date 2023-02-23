import Document, { Html, Head, Main, NextScript } from 'next/document'

import { getCssText } from '../../stitches.config'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Sora:wght@200;400;600&display=swap"
            rel="stylesheet"
          />
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta httpEquiv="cache-control" content="public" />
          <meta
            name="keywords"
            content="sites, web, desenvolvedor, developer, front end, javascript, typescript, react, nextjs, seo, css, tailwind, stitches, radix ui, motion, ux ui design"
          />
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
