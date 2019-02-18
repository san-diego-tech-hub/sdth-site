import styled from 'styled-components'

export const theme = {
  primary: '#5230B5',
  mainPurple: '#4c4e7a',
  color: 'rgb(115, 115, 115)',
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: white;

  section {
    margin: 10rem 20rem;
    font-size: 2rem;
    color: ${props => props.theme.color};
  }
  section:first-child {
    margin-top: 0;
    padding-top: 5rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-transform: uppercase;
  }
  h1 {
    font-size: 4rem;
  }
  h2 {
    color: ${props => props.theme.mainPurple};
    font-size: 3.2rem;
  }
  
  @media (max-width: 990px) {
    section {
      margin: 5rem 10rem;
    }
  }
  @media (max-width: 768px) {
    section {
      width: 80%;
      margin: 5rem auto;
    }
  }
`
