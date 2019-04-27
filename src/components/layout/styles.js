import styled from "styled-components"

export const theme = {
  primaryMuted: "#4d3b84",
  primaryMutedLight: "#b094cc",
  primaryDark: "#422695",
  primary: "#5230b5",
  primaryLight: "#7945c2",
  primaryWhite: "#e7d7fe",
  secondary: "#f25aa3",
  gray: "rgb(115, 115, 115)",
  green: "#92CD34",
  greenDark: "#82BD24"
}

export const Wrapper = styled.div`
  align-items: center;
  background: white;
  display: flex;
  flex-direction: column;

  section {
    margin: 10rem 20rem;
    font-size: 2rem;
    color: ${props => props.theme.gray};

    @media(max-width: 450px) {
      width: 100vw !important;
    }
  }

  section:first-child {
    margin-top: 0;
    padding-top: 0;
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
    color: ${props => props.theme.primaryMuted};
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
