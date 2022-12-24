import { Dock } from '../components/Dock/Dock'
import { Grid } from '../components/Grid/Grid'
import { Header } from '../components/Header/Header'
import { Readme } from '../components/Readme/Readme'
import { SEO } from '../components/SEO/SEO'

export default function Home() {
  return (
    <>
      <SEO
        title="Ton Almeida — Front-End & Creative Developer"
        description="Crio identidades visuais e desenvolvimento de sites."
      />
      <Grid>
        <Header />
        <Readme />
        <Dock />
      </Grid>
    </>
  )
}
