import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import SocialAggregator from "Components/social-aggregator"
import Html from "Common/Html"
import ExternalLink from "Common/ExternalLink"

function GetInvolved() {
  const {
    markdownRemark: { frontmatter }
  } = useStaticQuery(query)

  return (
    <Container>
      <section style={{ marginBottom: "5rem", padding: "1rem" }}>
        <h2>{frontmatter.mainTitle}</h2>
        <Html>
          {frontmatter.mainDescription}
        </Html>
      </section>
      {frontmatter.allPrograms.map(({ program }) => (
        <div key={program.name}>
          <h3>{program.name}</h3>
          <Html>{program.description}</Html>
          {program.signUpForms.map(({ form }) => (
            <ExternalLink key={form.label} href={`https://${form.url}`}>
              <button type="button">{form.label}</button>
            </ExternalLink>
          ))}
          <div>
            <p>Contact:</p>
            {
              program.pointsOfContact.map(({ contact }) => (
                <p>
                  <ExternalLink href={`mailto:${contact.email}`}>{contact.name}</ExternalLink>
                </p>
              ))
            }
          </div>
        </div>
      ))}
      <section style={{ marginTop: "5rem", padding: 0 }}>
        <h2>San Diego Tech Hub In Action</h2>
        <SocialAggregator />
      </section>
    </Container>
  )
}

export default GetInvolved

const query = graphql`
  query GETINVOLVED_QUERY {
    markdownRemark(frontmatter: { path: { eq: "get-involved" } }) {
      frontmatter {
        mainTitle
        mainDescription
        allPrograms {
          program {
            name
            logo
            description
            pointsOfContact {
              contact {
                name
                email
              }
            }
            signUpForms {
              form {
                label
                url
              }
            }
          }
        }
      }
    }
  }
`

const Container = styled.main`
  max-width: 1400px;

  section {
    padding: 2rem;
  }

  @media(max-width: 450px) {
    text-align: center;
    width 100vw;
  }
`
