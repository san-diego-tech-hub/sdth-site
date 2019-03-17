import styled from "styled-components"

export const Container = styled.div`
  background: rgb(240, 240, 240);
  border-radius: 1rem;
  color: ${props => props.theme.gray};
  display: grid;
  font-size: 2rem;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  margin: 0 20rem 5rem 20rem;
  margin-bottom: 3.2rem;
  padding: 4.8rem;

  button {
    background: #f25aa3;
    border-radius: 0.5rem;
    border: solid 2px #f25aa3;
    color: rgba(245, 245, 245, 1);
    margin-top: 2rem;
    padding: 1rem;
    width: 100%;
    &:hover {
      border: 2px solid #a31f5e;
      cursor: pointer;
    }
  }

  .smallScreen {
    color: ${props => props.theme.primaryMuted};
    display: none;
    font-size: 3.5rem;
  }

  @media (max-width: 5000px) {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
    width: 75%;
  }

  @media (max-width: 990px) {
    display: flex;
    flex-direction: column-reverse;
    margin: 1rem auto;

    .bigScreen {
      display: none;
    }

    .smallScreen {
      display: block;
    }
  }

  @media (max-width: 667px) {
    margin: 0 0 5rem 0;
    width: 100%;

    button {
      font-size: 1.8rem;
      width: 100%;
    }
  }

  @media(max-width: 450px) {
    padding: 10px;
    .hidden-on-mobile {
      display: none
    }
  }
`

export const Form = styled.form`
  border-right: 1px dashed black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 4.8rem;
  text-align: left;

  label {
    color: ${props => props.theme.primaryMuted};
    font-size: 2rem;
  }

  button {
    padding: 1rem;
  }

  input,
  textarea {
    padding: 0.4rem;
    width: 100%;
  }

  @media (max-width: 990px) {
    border-right: none;
    border-top: 1px dashed black;
    font-size: 2rem;
    padding-top: 3.2rem;
    padding-right: 0;
  }

  @media (max-width: 667px) {
    border-right: none;
    border-top: 1px dashed black;
    font-size: 2rem;
    margin-top: 2.4rem;
    padding: 3rem 1rem 1rem 1rem;
    width: 100%;
  }
`
export const FormField = styled.div`
  margin-bottom: 2rem;
`

export const FormTitle = styled.h2`
  color: ${props => props.theme.primaryMuted};
  font-size: 3.2rem;
`

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;
  justify-content: center;
  button {
    display: block;
    margin: auto;
  }

  a {
    color: white;
    text-decoration: none;
  }
  
  .slack-link {
    margin-left: 1rem;
  }

  .social-opacity {
    opacity: 0.7;
    &:hover {
      opacity: 1;
    }
  }
`

export const ProposeForm = styled.form`
  font-size: 1.4rem;
  height: 100%;
  margin: auto;
  padding: 5rem 2rem;
  button {
    background: ${props => props.theme.primaryLight};
    border: 2px solid transparent;
    border-radius: 0.5rem;
    &:hover {
      border: 2px solid #3e1575;
      cursor: pointer;
    }
  }

  label {
    display: block;
    font-weight: bolder;
    margin-top: 0.8rem;
  }

  input {
    border: 1px solid #cccccc;
    border-radius: 0.5rem;
    display: block;
    width: 100%;
  }

  textarea {
    border: 1px solid #bbb;
    display: block;
    width: 100%;
  }

  .input-field {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .cancel {
    background: white;
    border: 2px solid #ff8787;
    color: #ff8787;
    &:hover{
      border: 2px solid #ff0000;
      color: #ff0000;
    }
  }

  @media (max-width: 450px) {
    margin-top: 260px;
  }
`
