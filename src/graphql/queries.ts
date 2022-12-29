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
