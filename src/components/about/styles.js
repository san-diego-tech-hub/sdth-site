import styled from 'styled-components'

export const RebuildSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;

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
