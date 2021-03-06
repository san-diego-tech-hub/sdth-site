import styled from "styled-components"

export const Collaboration = styled.div`
  max-width: 800px;
  margin: 9rem auto 0;
  padding: 0 4rem;
  text-align: center;
  width: 100vw;

  p {
    margin: 0;
  }

  @media (max-width: 450px) {
    margin-top: 3rem;
    padding: 0;
  }
`

export const CollabIcon = styled.div`
  border-radius: 100%;
  height: 20rem;
  margin: auto;
  padding: 2rem;
  position: relative;
  text-align: center;
  width: 20rem;
`

export const PillarDescription = styled.div`
  margin: 15rem auto 5rem;
  max-width: 800px;
  padding: 0 7rem;
  width: 100vw;

  p {
    font-size: 1.7rem;
  }

  @media(max-width: 990px) {
    text-align: center;
  }

  @media (max-width: 450px) {
    padding: 0 5px;
  }
`

export const PillarIcon = styled.div`
  background: ${props => props.background};
  border-radius: 1rem;
  color: white;
  height: 30rem;
  line-height: 2rem;
  margin: 0.5rem;
  overflow: hidden;
  padding: 3rem;
  text-align: center;
  text-decoration: none;
  width: 27rem;

  p {
    padding-bottom: 1rem;
    min-height: 300px;
  }

  @media (max-width: 990px) {
    padding: 1.5rem;
    div {
      align-self: flex-end;
    }
  }

  @media(max-width: 350px) {
    width: 100vw;

    p {
      margin: auto;
      width: 25rem;
    }
  }
`

export const PillarRow = styled.aside`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 15rem;
  padding: 0 20rem;
  width: 100%;

  h4 {
    font-size: 2.4rem;
    text-transform: capitalize;
  }

  p {
    font-size: 1.6rem;
    padding: 0 1rem;
  }

  @media (max-width: 990px) {
    padding: 0 10rem;
  }
`

export const ThreeStep = styled.section`
  align-items: center;
  background: rgb(240, 240, 240);
  display: flex;
  justify-content: center;
  padding: 3.2rem 20rem;
  text-align: center;

  aside {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1200px;
  }

  h3 {
    font-size: 3.2rem;
    margin-top: 1.6rem;
    color: ${props => props.theme.primaryMuted};
    font-weight: normal;
  }

  .description {
    color: #444;
    font-size: 1.6rem;
    text-align: center;
  }

  @media (max-width: 1900px) {
    width: 100vw !important;
  }

  @media (max-width: 990px) {
    aside {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 667px) {
    padding: 1.6rem;
    text-align: center;

    .description {
      padding: 0;
    }
  }
`

export const WhatIsSDTH = styled.div`
  background: linear-gradient(rgba(82,48,181,0.7), 70%, rgba(129,74,198,0.4));
  border-radius: 5px;
  color: white;
  margin-bottom: -5rem;
  margin-left: -30%;
  padding: 4rem;
  position: relative;
  width: 570px;
  z-index: 0;

  @media(max-width: 1260px) {
    margin-left: 25%;
  }

  @media(max-width: 1200px) {
    margin-bottom: -13rem;
  }

  @media(max-width: 1040px) {
    margin-left: 0;
  }

  @media(max-width: 500px) {
    margin-bottom: -9rem;
    padding: 0 2rem;
    width: 100vw;
  }

  @media(max-width: 415px) {
    margin-bottom: -10.5rem;
  }

  @media(max-width: 350px) {
    margin-bottom: -10.5rem;
  }
`
