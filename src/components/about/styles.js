import styled from "styled-components"

export const AboutSection = styled.section`
  background: rgb(240, 240, 240);
  margin: 0 !important;
  padding: 10rem 20rem;

  @media (max-width: 990px) {
    padding: 5rem;
    width: 100% !important;
  }
`

export const RebuildSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2.4rem;
  background: rgb(240, 240, 240);
  margin: 0 0 4.8rem 0 !important;
  padding: 10rem 20rem;

  h4 {
    margin: 0 !important;
    font-size: 2.4rem;
    font-weight: 600;
  }
  .rebuild-panel {
    background: rgb(184, 198, 229);
    border-radius: 0.5rem;
    padding: 1rem;
    display: grid;
    grid-template-columns: 1fr 5fr;
    margin-bottom: 1rem;
    color: #394553;
    span {
      margin: auto 0;
    }
  }

  @media (max-width: 990px) {
    grid-template-columns: 1fr;
    padding: 5rem !important;
    width: 100% !important;
  }
`

export const FounderSection = styled.section`
  margin: 0 !important;
  padding: 3.2rem 20rem;
  @media (max-width: 990px) {
    padding: 5rem;
    width: 100% !important;
  }
`

export const ChallengesSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2.4rem;

  h4 {
    margin: 0 !important;
    font-size: 2.4rem;
    font-weight: 600;
  }
  @media (max-width: 667px) {
    grid-template-columns: 1fr;
  }
`

export const ChallengeIcon = styled.span`
  p {
    font-size: 1.6rem;
  }
  span {
    margin: auto 0;
  }
  div {
    background: rgb(184, 198, 229);
    border-radius: 0.5rem;
    padding: 1rem;
    display: grid;
    grid-template-columns: 1fr 5fr;
    margin-bottom: 1rem;
    color: #394553;
    line-height: 2rem;
    grid-gap: 2.4rem;
  }
`
