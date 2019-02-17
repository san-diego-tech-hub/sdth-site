import styled from 'styled-components'

export const ThreeStep = styled.section`
  background: rgb(240, 240, 240);
  text-align: center;
  padding: 3.2rem 20rem;
  margin: 0 !important;
  h3 {
    font-size: 3.2rem;
    margin-top: 1.6rem;
    color: ${props => props.theme.mainPurple};
    font-weight: normal;
  }
  aside {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1rem;
    margin: auto;
  }

  .description {
    text-align: left;
    font-size: 1.6rem;
    text-align: center;
  }
  @media (max-width: 667px) {
    text-align: center;
    padding: 3.2rem 0;
    padding: 1.6rem;
    .description {
      padding: 0;
    }
  }
  @media (max-width: 990px) {
    width: 100% !important;
    aside {
      grid-template-columns: 1fr;
    }
  }
`

export const CollabIcon = styled.div`
  position: relative;
  text-align: center;
  border-radius: 100%;
  width: 20rem;
  height: 20rem;
  margin: auto;
  padding: 2rem;
`

export const PillarRow = styled.aside`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  h4 {
    font-size: 2.4rem;
    text-transform: capitalize;
  }
  p {
    font-size: 1.6rem;
    padding: 0 1rem;
  }
  @media (max-width: 5000px) {
  }
  @media (max-width: 990px) {
  }
`

export const PillarIcon = styled.div`
  background: ${props => props.background};
  line-height: 2rem;
  border-radius: 1rem;
  height: 27rem;
  overflow: hidden;
  color: white;
  margin: 0.5rem;
  padding: 3rem;
  text-align: center;
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
`
