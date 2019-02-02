import styled from 'styled-components'

import conduitsFlow from '../../../images/conduits-flow.svg'

export const ConduitsFlow = styled.div`
  background-image: url(${conduitsFlow});
  background-size: cover;
  background-position-y: -15rem;
  padding: 10rem;
  text-align: center;

  @media (max-width: 667px) {
    padding: 0.5rem;
    img {
      margin: 0;
      width: 100vh;
    }
  }
`

export const Logo = styled.div`
  background: white;
  width: 50%;
  margin: auto;

  img {
    margin-bottom: 0;
  }

  @media (max-width: 667px) {
    width: 100%;
  }
`
