import styled from 'styled-components'

export const PillarInfo = styled.section`
  margin: 5rem 20rem !important;
  display: grid;
  grid-template-columns: 15rem 1fr;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 1.6rem;
  }
  h1 {
    font-size: 6.4rem;
    color: #4c4e7a;
  }
  aside {
    font-size: 3.2rem;
  }
  @media (max-width: 768px) {
    grid-template-columns: 40% 1fr;
    h1 {
      font-size: 2.4rem;
    }
    aside {
      font-size: 1.6rem;
      padding: 0;
    }
  }

  @media (max-width: 500px) {
    margin: 2rem 0 !important;
    width: 100vw !important;
  }
`

export const PillarSection = styled.section`
  margin: 5rem 20rem !important;

  @media (max-width: 500px) {
    margin: 2rem 0 !important;
    width: 100vw !important;
  }
`

export const LeadsSection = styled.section`
  margin: 5rem 20rem !important;
  p {
    text-align: left;
    font-size: 1.4rem;
    line-height: 2.4rem;
    text-align: left;
  }
  .lead {
    border: 1px solid rgb(207, 207, 207);
    border-radius: 0.5rem;
    display: grid;
    grid-template-columns: 20rem 1fr;
    padding: 4rem;
    grid-gap: 3.2rem;
    font-size: 2.4rem;
    text-align: center;
    color: #4c4e7a;
    line-height: 2.4rem;
    margin-bottom: 2.4rem;
    h5 {
      text-transform: capitalize;
      text-align: left;
      font-size: 1.6rem;
      color: rgb(156, 168, 195);
    }
    .email {
      white-space: nowrap;
      display: block;
      font-size: 1.6rem;
    }
  }
  @media (max-width: 768px) {
    .lead {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 500px) {
    margin: 2rem 0 !important;
    width: 100vw !important;
  }
`
