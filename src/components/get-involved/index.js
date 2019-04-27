import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { aggregateImages } from "Utils"
import SocialAggregator from "Components/social-aggregator"
import Html from "Common/Html"
import ExternalLink from "Common/ExternalLink"
import {
  Container,
  Contacts,
  Program,
  ProgramContainer,
  SignUpButton,
  SubContainer
} from "./styles"

function GetInvolved() {
  const {
    markdownRemark: { frontmatter },
    initiativeLogos
  } = useStaticQuery(query)

  const logos = aggregateImages(initiativeLogos)

  return (
    <Container>
      <section style={{ marginBottom: "2rem", padding: "1rem" }}>
        <h2>{frontmatter.mainTitle}</h2>
        <Html>
          {frontmatter.mainDescription}
        </Html>
      </section>
      <ProgramContainer>
        {frontmatter.allPrograms.map(({ program }) => (
          <Program key={program.name}>
            <Img
            alt={`${program.name} logo`}
            fluid={logos[program.logo]}
            style={{ margin: "0 auto 2.5rem", width: "300px" }}
            />
            <Html className="program-description">{program.description}</Html>
            <SubContainer>
              {program.signUpForms.map(({ form }) => (
                <ExternalLink key={form.label} href={`https://${form.url}`}>
                  <SignUpButton type="button">{form.label}</SignUpButton>
                </ExternalLink>
              ))}
            </SubContainer>
            <Contacts>
              <p>Contact:</p>
              {
              program.pointsOfContact.map(({ contact }) => (
                <p key={contact.name}>
                  <ExternalLink href={`mailto:${contact.email}`}>{contact.name}</ExternalLink>
                </p>
              ))
            }
            </Contacts>
          </Program>
        ))}
      </ProgramContainer>

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

    initiativeLogos: allFile(filter: { sourceInstanceName: { eq: "initiativeLogos" } }) {
      edges {
        node {
          relativePath
          ...childSharp
        }
      }
    }
  }
`
