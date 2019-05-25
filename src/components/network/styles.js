import styled from "styled-components"


export const NetworkContainer = styled.div`

margin: 0 auto;
max-width: 1200px;
width: 1200px;
padding: 10rem;
background: linear-gradient(rgba(82,48,181,0.7),70%,rgba(129,74,198,0.4));
.conduits-flow-illustration {
  position: absolute;
  opacity: 0.1;
  clip-path: inset(150px 0px 0px 40px);
  margin-top: -15vw;
  margin-left: -12vw;
  display: flex;
}
@media (max-width: 990px) {
  padding: 5rem;
}

@media (max-width: 450px) {
  padding: 2rem;

  h2 {
    text-align: center;
  }
}
`

export const NetworkContent = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 10rem;

  @media (max-width: 990px) {
    padding: 5rem;
  }

  @media (max-width: 450px) {
    padding: 2rem;

    h2 {
      text-align: center;
    }
  }
`

export const NetworkSection = styled.section`
  margin: 0 !important;
  display: block;
  margin: auto auto;
  .conduits-flow-illustration {
    position: relative;
    display: block;
    height: 50vh;
    color: white; 
    opacity: 1;
    margin-top: -35vh;
    margin-left: 0;
    clip-path: inset(90px 0px 0px 40px);
  }
  .network-logo {
    display: block;
    height: 23vh;
    color: white; 
    opacity: 1;
    margin: -5vh auto;
  }
  .network-subHeading {
    color: white;
    font-size: 1.6rem; 
  }
`

export const NetworkLinks = styled.div`
display: block;
width: 35vw;
margin: 10vh auto;
ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: -1px;
}
li:first-child {
  border-left: 1px solid transparent;
}
li {
  flex-grow: .5;
  flex-basis: auto;
  padding: 0;
  text-align: center;
  border-left: 1px solid #ccc;
  list-style-type: none;
  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    font-size:1.5em;
  }
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

export const ChallengesSection = styled.section`
  display: grid;
  grid-gap: 2.4rem;
  grid-template-columns: 1fr 1fr;
  margin: 10rem auto !important;
  max-width: 1200px;

  h4 {
    margin: 0 !important;
    font-size: 2.4rem;
    font-weight: 600;
  }

  .title-description {
    padding: 2rem;
  }

  @media (max-width: 990px) {
    grid-template-columns: 1fr;
    padding: 2rem !important;
    width: 100% !important;

    .title-description {
      grid-row: 1;
    }
  }

  @media (max-width: 450px) {
    h2 {
      text-align: center;
    }

    .title-description {
      padding: 0;
    }
  }
`

export const FounderSection = styled.section`
  margin: 0 auto !important;
  max-width: 1200px;
  padding: 3.2rem 10rem;

  @media (max-width: 990px) {
    padding: 5rem;
    width: 100% !important;
  }

  @media (max-width: 450px) {
    padding: 2rem;

    h2 {
      text-align: center;
    }

    img {
      width: 100%;
    }
  }
`

export const RebuildSection = styled.div`
  background: rgb(240, 240, 240);
  width: 100%;
`

export const RebuildContent = styled.section`
  display: grid;
  grid-gap: 2.4rem;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto 10rem !important;
  max-width: 1200px;
  padding: 10rem 2rem !important;

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

  .title-description {
    padding: 2rem;
  }

  @media (max-width: 990px) {
    grid-template-columns: 1fr;
    padding: 2rem !important;
    width: 100% !important;
  }

  @media (max-width: 450px) {
    h2 {
      text-align: center;
    }

    .title-description {
      padding: 0;
    }
  }
`

export const WhatisSDTH = styled.div`
  max-width: 800px;
  margin: 2rem auto 5rem;
  padding: 0 4rem;
  text-align: center;
  width: 100vw;

  p {
    color: #555;
    font-size: 2rem;
  }

  @media (max-width: 450px) {
    margin-top: -1rem;
    padding: 5px;
  }
`
