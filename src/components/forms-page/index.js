import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Html from "Common/Html"
import gql from "graphql-tag"
import { Query, Mutation } from "react-apollo"

function FormsPage() {
  const {
    markdownRemark: { frontmatter }
  } = useStaticQuery(query)

  const GET_CODESCHOOL = gql`
  {
    codeSchool(where: {id: {_eq: 1}}) {
      name
    }
  }
  `

  const ADD_JOB_CANDIDATE = gql`
  mutation {
    insert_jobCandidate (
      objects: [
        {
          name: "firstName lastName",
          id: 2,
          email: "email@address.com",
          socialMedia: ["https://www.linkedin.com/company/sandiegocodeschool", "wwwoawjfoaiwjef.comawoefij.com"]
          website: "test@test.com",
          imageUrl: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        }
      ]
    ) 
    {
      returning {
        name
        id
        email
        socialMedia
        website
        imageUrl
      }
    }
  }
  `

  return (
    <Container>
      <section style={{ marginBottom: "5rem", padding: "1rem" }}>
        <div style={{ textAlign: "center" }}>
          <h2>{frontmatter.mainTitle}</h2>
          <Html>
            {frontmatter.mainDescription}
          </Html>
          {/* get code school query */}
          <Query query={GET_CODESCHOOL}>
            {({ data, loading, error }) => {
              if (loading) return "Loading..."
              if (error) return `Error! ${error.message}`
              return <p>{ data.codeSchool[0].name }</p>
            }}
          </Query>

          <Mutation mutation={ADD_JOB_CANDIDATE}>
            {addJobCandidate => (
              <button type="button" onClick={addJobCandidate}>
                TEST
              </button>
            )}
          </Mutation>


          {/* <button type="button" onClick={useMutation(ADD_CODESCHOOL)}>TEST ME</button> */}
        </div>
        <ButtonGroup>
          <div className="btn-group">
            <button type="button">Job Seeker</button>
            <button type="button">Venue</button>
            <button type="button">Sponsor</button>
            <button type="button">Speaker</button>
            <button type="button">Code School</button>
          </div>
        </ButtonGroup>
      </section>
      {/* form component goes here */}
    </Container>
  )
}

export default FormsPage

const query = graphql`
  query FORMS_QUERY {
    markdownRemark(frontmatter: { path: { eq: "forms" } }) {
      frontmatter {
        mainTitle
        mainDescription
      }
    }
  }
`

const Container = styled.main`
  width: 100%;
  max-width: 1400px;

  section {
    padding: 2rem;
  }

  @media(max-width: 450px) {
    text-align: center;
    width 100vw;
  }
`

const ButtonGroup = styled.div`
  text-align: center;

  .btn-group button {
    background-color: #5833b6;
    border: 1px solid #3c237d;
    cursor: pointer;
    color: white;
    width: 170px;
    display: inline-block;
  }

  .btn-group button:hover {
    background-color: #3c237d;
  }

  @media(max-width: 450px) {
    text-align: center;
  }
`
