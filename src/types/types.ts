import { ActionId, ActionImpl } from 'kbar'

export type SEOProps = {
  path?: string
  title: string
  image: string
  description: string
  titleSufix?: boolean
}

export type HomeProps = {
  home: {
    slug: string
    title: string
    description: string
    name: string
    position: string
    minibiography: string
    localization: {
      html: string
    }
    ogimage: {
      url: string
    }
  }
}

export type AboutPageProps = {
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

export type ServicesProps = {
  services: {
    id: string
    tag: string
    title: string
    description: {
      html: string
    }
  }[]
}

export type WorkPageProps = {
  work: {
    slug: string
    title: string
    description: string
    ogimage: {
      url: string
    }
  }
}

export type WorksRecentsProps = {
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

export type WorksCollaborateProps = {
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

export type AddressProps = {
  localization: string
}

export type BreadcrumbsProps = {
  text: string
}

export type ButtonProps = {
  path: string
  name: string
  text?: string
  children?: React.ReactNode
}

export type DockLinkProps = {
  includes?: boolean
  href: string
  aria: string
  title: string
  children: React.ReactNode
}

export type GridProps = {
  children: React.ReactNode
}

export type KBarProps = {
  id?: ActionId
  name?: string
  shortcut?: string[]
  keywords?: string
  section?: string
  icon?: string | React.ReactElement | React.ReactNode
  perform?: (currentActionImpl: ActionImpl) => void
  children?: React.ReactNode
}

export type KBarContainerProps = {
  action: KBarProps
  active: boolean
}
