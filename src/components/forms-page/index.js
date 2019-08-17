import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Html from "Common/Html"
import JobSeekersForm from "../forms/job-seekers"
import VenuesForm from "../forms/venues"
import SpeakersForm from "../forms/speakers"
import SponsorsForm from "../forms/sponsors"

function FormsPage() {
  const {
    markdownRemark: { frontmatter }
  } = useStaticQuery(query)

  const [activeForm, setActiveForm] = useState("jobSeeker")

  const FORMS = {
    jobSeeker: JobSeekersForm,
    venue: VenuesForm,
    speaker: SpeakersForm,
    sponsor: SponsorsForm
  }

  const ResourceForm = FORMS[activeForm]

  return (
    <Container>
      <section style={{ marginBottom: "5rem", padding: "1rem" }}>
        <div style={{ textAlign: "center" }}>
          <h2>{frontmatter.mainTitle}</h2>
          <Html>
            {frontmatter.mainDescription}
          </Html>
        </div>
        <ButtonGroup>
          <div className="btn-group">
            <button type="button" onClick={() => setActiveForm("jobSeeker")}>Job Seeker</button>
            <button type="button" onClick={() => setActiveForm("venue")}>Venue</button>
            <button type="button" onClick={() => setActiveForm("sponsor")}>Sponsor</button>
            <button type="button" onClick={() => setActiveForm("speaker")}>Speaker</button>
          </div>
        </ButtonGroup>
      </section>

      <ResourceForm />

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

  .btn-group button:focus {
    outline: none;
  }

  @media(max-width: 990px) {
    text-align: center;
    width: 100%;
  }

  @media(max-width: 667px) {
    text-align: center;
    width: 100%;
  }

  @media(max-width: 450px) {
    text-align: center;
  }
`
