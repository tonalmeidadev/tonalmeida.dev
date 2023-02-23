import { SetupPageProps } from '../../pages/setup'
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs'
import { WorkstationContainer } from './Styled'

export function Workstation({ setup }: SetupPageProps) {
  return (
    <WorkstationContainer>
      <Breadcrumbs text="Setup" />
      <div dangerouslySetInnerHTML={{ __html: setup.setup.html }} />
    </WorkstationContainer>
  )
}
