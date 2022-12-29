import { NextSeo } from 'next-seo'

type SEOProps = {
  path?: string
  title: string
  image: string
  description: string
  titleSufix?: boolean
}

export function SEO({
  path,
  title,
  image,
  description,
  titleSufix = false
}: SEOProps) {
  const url = `https://www.tonalmeida.dev/${path || ''}`
  const titlePage = `${title}${
    titleSufix ? ' | Ton Almeida — Front-End Developer' : ''
  }`

  return (
    <NextSeo
      canonical={url}
      title={titlePage}
      description={description}
      openGraph={{
        url,
        title,
        description,
        images: [
          {
            url: image,
            alt: title,
            width: 1200,
            height: 630,
            type: 'image/webp'
          }
        ]
      }}
    />
  )
}
