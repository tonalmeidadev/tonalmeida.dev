import { GetStaticProps } from 'next'

import { Dock } from '../components/Dock/Dock'
import { Footer } from '../components/Footer/Footer'
import { Grid } from '../components/Grid/Grid'
import { Header } from '../components/Header/Header'
import { SEO } from '../components/SEO/SEO'
import { Workstation } from '../components/Workstation/Workstation'
import { GET_SETUP_PAGE } from '../graphql/queries'
import { client } from '../lib/apollo-client'

export type SetupPageProps = {
  setup: {
    slug: string
    title: string
    description: string
    setup: {
      html: string
    }
    ogimage: {
      url: string
    }
  }
}

export default function Setup({ setup }: SetupPageProps) {
  return (
    <>
      <SEO
        titleSufix
        path="setup"
        title={setup.title}
        image={setup.ogimage.url}
        description={setup.description}
      />
      <Grid>
        <Header />
        <Workstation setup={setup} />
        <Footer />
        <Dock />
      </Grid>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: GET_SETUP_PAGE
  })
  const setup = data.page

  return {
    props: {
      setup
    },
    revalidate: 60 * 60 * 12 // 12 hours
  }
}
