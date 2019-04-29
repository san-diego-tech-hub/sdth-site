import styled from "styled-components"

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const Container = styled.main`
  max-width: 1400px;

  section {
    padding: 2rem;
  }

  @media(max-width: 450px) {
    text-align: center;
    width 100vw;
  }
`

export const CardHeader = styled.div`
  align-items: center;
  background: #dfdfdf;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`

export const Contacts = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem;
  text-align: center;
  width: 100%;

  p {
    color: rgba(0,0,0,0.5);
    display: inline-block;
    font-size: 1.5rem;
    font-weight: bolder;
    margin-bottom: 0;
    text-shadow: 1px 1px rgba(255,255,255,0.8);
  }

  a {
    color: ${props => props.theme.primaryMuted};
  }

  span {
    font-size: 2rem;
    margin: 8px 0.8rem;
    white-space: nowrap;
  }
`

export const ContactLinks = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const LogoContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 280px;
`

export const ProgramCard = styled.div`
  align-items: center;
  background: #dfdfdf;
  border-radius: 5px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  color: #4a4a4a;
  display: flex;
  flex-direction: column;
  margin: 1.5rem 1rem;
  width: 30%;

  .closed {
    display: none;
    height: 0px;
    overflow: hidden;
    transition: height 1s ease-out;
  }

  .open {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: fit-content;
    transition: height 1s ease-out;
  }

  a {
    color: ${props => props.theme.primaryMuted};
    font-weight: bolder;
    text-decoration: none;

    &:hover, &:focus {
      text-decoration: underline;
    }
  }

  @media(max-width: 1200px) {
    width: 47%;
  }

  @media(max-width: 800px) {
    margin: 1.5rem 0;
    width: 100%;
  }
`

export const ProgramContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1400px;
  width: 100vw;

  .program-description {
    background: #eee;
    font-size: 1.8rem;
    padding: 5rem 2rem;
  }
`

export const SignUpButton = styled.button`
  background: ${props => props.theme.green};
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
  color: white;
  font-size: 2rem;
  margin: 1rem;
  padding: 1rem 3rem;
  text-shadow: 1px 1px rgba(0,0,0,0.1);
  white-space: nowrap;

  &:hover,
  &:focus {
    cursor: pointer;
    background: ${props => props.theme.greenLight};
  }
`

export const Spacer = styled.div`
  flex-grow: 1000;
`

export const ToggleDetails = styled.div`
  color: rgba(0,0,0,0.3);
  font-weight: bolder;
  font-size: 2rem;
  padding: 2rem;
  padding-bottom: 1rem;
  text-shadow: 1px 1px rgba(255,255,255,0.6);

  &:hover, &:focus {
    cursor: pointer;
  }
`
