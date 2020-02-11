import gql from 'graphql-tag'

export const qStudents = gql`
  {
    students {
      _id
      name
    }
  }
`
