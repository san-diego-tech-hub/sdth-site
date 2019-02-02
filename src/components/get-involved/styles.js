import styled from 'styled-components'

export const ChallengesSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;

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
  }
`
