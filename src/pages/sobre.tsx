import { GetStaticProps } from 'next'

import { About } from '../components/About/About'
import { Dock } from '../components/Dock/Dock'
import { Footer } from '../components/Footer/Footer'
import { Grid } from '../components/Grid/Grid'
import { Header } from '../components/Header/Header'
import { SEO } from '../components/SEO/SEO'
import { GET_ABOUT_PAGE, GET_SERVICES } from '../graphql/queries'
import { client } from '../lib/apollo-client'

type AboutProps = {
  about: {
    slug: string
    title: string
    description: string
    name: string
    position: string
    biography: {
      html: string
    }
    localization: {
      html: string
    }
    resume: {
      url: string
    }
    ogimage: {
      url: string
    }
  }
}

type ServicesProps = {
  services: {
    id: string
    tag: string
    title: string
    description: string
  }[]
}

export type AboutPageProps = AboutProps & ServicesProps

export default function Sobre({ about, services }: AboutPageProps) {
  return (
    <>
      <SEO
        titleSufix
        title={about.title}
        image={about.ogimage.url}
        description={about.description}
      />
      <Grid>
        <Header />
        <About about={about} services={services} />
        <Footer />
        <Dock />
      </Grid>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data: dataAbout } = await client.query({
    query: GET_ABOUT_PAGE
  })

  const { data: dataServices } = await client.query({
    query: GET_SERVICES
  })

  const about = dataAbout.page
  const { services } = dataServices

  return {
    props: {
      about,
      services
    },
    revalidate: 60 * 60 * 12 // 12 hours
  }
}
