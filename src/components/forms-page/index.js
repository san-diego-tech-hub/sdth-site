import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Html from "Common/Html"
import gql from "graphql-tag"
import { Query } from "react-apollo"
import { useMutation } from "@apollo/react-hooks"

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

  const ADD_CODESCHOOL = gql`
  mutation insert_codeSchool {
    insert_codeSchool (objects: [{name: "WHOOPSIES", id: 11}]) {
      returning {
        id
        name
      }
    }
  }
  `

  const handleButton = (e) => {
    e.preventDefault()
    const [insert_codeSchool] = useMutation(ADD_CODESCHOOL)
    insert_codeSchool({ variables: { name: "WHOOPSIES", id: 11 } })
  }

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
              console.log(data)
              return <p>{ data.codeSchool[0].name }</p>
            }}
          </Query>
          <button type="button" onClick={handleButton}>TEST ME</button>
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
