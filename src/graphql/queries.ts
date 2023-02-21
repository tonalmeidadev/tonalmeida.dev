import { gql } from '@apollo/client'

export const GET_HOME_PAGE = gql`
  query GET_HOME_PAGE {
    page(where: { slug: "home" }) {
      slug
      title
      description
      name
      position
      minibiography
      localization {
        html
      }
      ogimage {
        url
      }
    }
  }
`

export const GET_ABOUT_PAGE = gql`
  query GET_ABOUT_PAGE {
    page(where: { slug: "about" }) {
      slug
      title
      description
      name
      position
      biography {
        html
      }
      localization {
        html
      }
      resume {
        url
      }
      ogimage {
        url
      }
    }
  }
`

export const GET_WORKS = gql`
  query GET_WORKS {
    works {
      id
      date
      title
      online
      link
      image {
        url
      }
    }
  }
`

export const GET_COLLABORATES = gql`
  query GET_COLLABORATES {
    collaborates {
      id
      date
      title
      online
      link
      image {
        url
      }
    }
  }
`

export const GET_SERVICES = gql`
  query GET_SERVICES {
    services {
      id
      tag
      title
      description
    }
  }
`
