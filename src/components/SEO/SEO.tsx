import { NextSeo } from 'next-seo'

type SEOProps = {
  title: string
  description: string
  titleSufix?: boolean
}

export function SEO({ title, description, titleSufix = false }: SEOProps) {
  const titlePage = `${title}${
    titleSufix ? ' | Ton Almeida — Front-End Developer' : ''
  }`

  return (
    <NextSeo
      title={titlePage}
      description={description}
      openGraph={{
        title,
        description
      }}
    />
  )
}
