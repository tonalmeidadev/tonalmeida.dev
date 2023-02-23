import { GetStaticProps } from 'next'

import { Dock } from '../components/Dock/Dock'
import { Footer } from '../components/Footer/Footer'
import { Grid } from '../components/Grid/Grid'
import { Header } from '../components/Header/Header'
import { SEO } from '../components/SEO/SEO'
import { Works } from '../components/Works/Works'
import { GET_WORKS, GET_COLLABORATES, GET_WORK_PAGE } from '../graphql/queries'
import { client } from '../lib/apollo-client'

type WorkPageProps = {
  work: {
    slug: string
    title: string
    description: string
    ogimage: {
      url: string
    }
  }
}

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

type WorksCollaborateProps = {
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

export type WorksPageProps = WorksRecentsProps & WorksCollaborateProps

export default function Trabalhos({
  work,
  works,
  collaborates
}: WorkPageProps & WorksPageProps) {
  return (
    <>
      <SEO
        titleSufix
        path="trabalhos"
        title={work.title}
        image={work.ogimage.url}
        description={work.description}
      />
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
  const { data: dataWork } = await client.query({
    query: GET_WORK_PAGE
  })

  const { data: dataWorks } = await client.query({
    query: GET_WORKS
  })

  const { data: dataCollaborate } = await client.query({
    query: GET_COLLABORATES
  })

  const work = dataWork.page
  const { works } = dataWorks
  const { collaborates } = dataCollaborate

  return {
    props: {
      work,
      works,
      collaborates
    },
    revalidate: 60 * 60 * 12 // 12 hours
  }
}
