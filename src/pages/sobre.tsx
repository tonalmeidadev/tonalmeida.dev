import { GetStaticProps } from 'next'

import { About } from '../components/About/About'
import { Dock } from '../components/Dock/Dock'
import { Footer } from '../components/Footer/Footer'
import { Grid } from '../components/Grid/Grid'
import { Header } from '../components/Header/Header'
import { SEO } from '../components/SEO/SEO'
import { GET_ABOUT_PAGE, GET_SERVICES } from '../graphql/queries'
import { client } from '../lib/apollo-client'
import { AboutPageProps, ServicesProps } from '../types/types'

export default function Sobre({
  about,
  services
}: AboutPageProps & ServicesProps) {
  return (
    <>
      <SEO
        titleSufix
        path="sobre"
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
