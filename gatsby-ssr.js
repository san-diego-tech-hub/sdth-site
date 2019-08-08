import React from "react"
import { ApolloProvider } from "react-apollo"
import ApolloClient from "apollo-boost"
import fetch from "isomorphic-fetch"


const client = new ApolloClient({
  uri: "https://sdth-db.herokuapp.com/v1/graphql",
  headers: {
    "x-hasura-admin-secret": process.env.GATSBY_HASURA_ADMIN_SECRET
  },
  fetch
})

export const wrapRootElement = ({ element }) => {
  return (
    <ApolloProvider client={client}>
      {element}
    </ApolloProvider>
  )
}
