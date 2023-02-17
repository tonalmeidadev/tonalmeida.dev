import { GetStaticProps } from 'next'

import { About } from '../components/About/About'
import { Dock } from '../components/Dock/Dock'
import { Footer } from '../components/Footer/Footer'
import { Grid } from '../components/Grid/Grid'
import { Header } from '../components/Header/Header'
import { SEO } from '../components/SEO/SEO'
import { GET_ABOUT_PAGE } from '../graphql/queries'
import { client } from '../lib/apollo-client'

export type AboutProps = {
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

export default function Sobre({ about }: AboutProps) {
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
        <About about={about} />
        <Footer />
        <Dock />
      </Grid>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: GET_ABOUT_PAGE
  })
  const about = data.page

  return {
    props: {
      about
    },
    revalidate: 60 * 60 * 12 // 12 hours
  }
}
