import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { aggregateImages } from "Utils"
import SocialAggregator from "Components/social-aggregator"
import Html from "Common/Html"
import Program from "./Program"
import {
  Container,
  ProgramContainer,
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
          <Program
            key={program.name}
            program={program}
            logo={logos[program.logo]}
          />
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
