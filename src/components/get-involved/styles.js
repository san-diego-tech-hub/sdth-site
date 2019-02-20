import styled from 'styled-components'

export const PartnerSection = styled.section`
  h2 {
    margin-bottom: 3.2rem;
  }
  .partners {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 3.2rem;

    .partner {
      border-radius: 0.5rem;
    }
  }
  @media (max-width: 990px) {
    .partners {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`