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

  const [jobClicked, setJobClicked] = useState(false)
  const [venueClicked, setVenueClicked] = useState(false)
  const [speakerClicked, setSpeakerClicked] = useState(false)
  const [sponsorClicked, setSponsorClicked] = useState(false)

  const handleButton = (formType) => {
    switch (formType) {
      case "jobSeeker":
        setJobClicked(true)
        setVenueClicked(false)
        setSponsorClicked(false)
        setSpeakerClicked(false)
        break
      case "venue":
        setVenueClicked(true)
        setJobClicked(false)
        setSponsorClicked(false)
        setSpeakerClicked(false)
        break
      case "sponsor":
        setSponsorClicked(true)
        setJobClicked(false)
        setVenueClicked(false)
        setSpeakerClicked(false)
        break
      case "speaker":
        setSpeakerClicked(true)
        setJobClicked(false)
        setVenueClicked(false)
        setSponsorClicked(false)
        break
      default:
    }
  }

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
            <button type="button" onClick={() => handleButton("jobSeeker")}>Job Seeker</button>
            <button type="button" onClick={() => handleButton("venue")}>Venue</button>
            <button type="button" onClick={() => handleButton("sponsor")}>Sponsor</button>
            <button type="button" onClick={() => handleButton("speaker")}>Speaker</button>
          </div>
        </ButtonGroup>
      </section>

      { jobClicked && <JobSeekersForm /> }
      { venueClicked && <VenuesForm /> }
      { sponsorClicked && <SponsorsForm />  }
      { speakerClicked && <SpeakersForm />  }

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
