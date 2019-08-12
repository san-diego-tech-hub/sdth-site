import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Html from "Common/Html"
import JobSeekersForm from "../forms/job-seekers"

function FormsPage() {
  const {
    markdownRemark: { frontmatter }
  } = useStaticQuery(query)

  const [jobClicked, setJobClicked] = useState(false)
  const [venueClicked, setVenueClicked] = useState(false)
  const [speakerClicked, setSpeakerClicked] = useState(false)
  const [sponsorClicked, setSponsorClicked] = useState(false)

  const handleButton = (formType) => {
    // e.preventDefault()
    switch (formType) {
      case "jobSeeker":
        console.log("job pressed")
        setJobClicked(true)
        setVenueClicked(false)
        setSponsorClicked(false)
        setSpeakerClicked(false)
        break
      case "venue":
        console.log("venue pressed")
        setVenueClicked(true)
        setJobClicked(false)
        setSponsorClicked(false)
        setSpeakerClicked(false)
        break
      case "sponsor":
        console.log("sponsor pressed")
        setSponsorClicked(true)
        setJobClicked(false)
        setVenueClicked(false)
        setSpeakerClicked(false)
        break
      case "speaker":
        console.log("speaker pressed")
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
      <section style={{ marginBottom: "3rem", padding: "1rem" }}>
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
      { venueClicked && <div>hello world</div> }
      { sponsorClicked && <div>there it is</div> }
      { speakerClicked && <div>dancing queen</div> }
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
