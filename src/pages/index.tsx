import { GetStaticProps } from 'next'

import { Dock } from '../components/Dock/Dock'
import { Grid } from '../components/Grid/Grid'
import { Header } from '../components/Header/Header'
import { Readme } from '../components/Readme/Readme'
import { SEO } from '../components/SEO/SEO'
import { GET_HOME_PAGE } from '../graphql/queries'
import { client } from '../lib/apollo-client'
import { HomeProps } from '../types/types'

export default function Home({ home }: HomeProps) {
  return (
    <>
      <SEO
        title={home.title}
        image={home.ogimage.url}
        description={home.description}
      />
      <Grid>
        <Header />
        <Readme home={home} />
        <Dock />
      </Grid>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: GET_HOME_PAGE
  })
  const home = data.page

  return {
    props: {
      home
    },
    revalidate: 60 * 60 * 12 // 12 hours
  }
}
