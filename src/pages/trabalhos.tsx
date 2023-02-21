import { GetStaticProps } from 'next'

import { Dock } from '../components/Dock/Dock'
import { Footer } from '../components/Footer/Footer'
import { Grid } from '../components/Grid/Grid'
import { Header } from '../components/Header/Header'
import { Works } from '../components/Works/Works'
import { GET_WORKS, GET_COLLABORATES } from '../graphql/queries'
import { client } from '../lib/apollo-client'

type WorksRecentsProps = {
  works: {
    id: string
    date: string
    title: string
    online: string
    link: string
    image: {
      url: string
    }
  }[]
}

type WorksParticipateProps = {
  collaborates: {
    id: string
    date: string
    title: string
    online: string
    link: string
    image: {
      url: string
    }
  }[]
}

export type WorksPageProps = WorksRecentsProps & WorksParticipateProps

export default function Trabalhos({ works, collaborates }: WorksPageProps) {
  return (
    <>
      <Grid>
        <Header />
        <Works works={works} collaborates={collaborates} />
        <Footer />
        <Dock />
      </Grid>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data: dataWorks } = await client.query({
    query: GET_WORKS
  })

  const { data: dataCollaborate } = await client.query({
    query: GET_COLLABORATES
  })

  const { works } = dataWorks
  const { collaborates } = dataCollaborate

  return {
    props: {
      works,
      collaborates
    },
    revalidate: 60 * 60 * 12 // 12 hours
  }
}
