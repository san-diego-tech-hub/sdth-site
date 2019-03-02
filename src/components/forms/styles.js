import styled from "styled-components"
import { NAV_HEIGHT }  from "Utils/constants"

export const Container = styled.div`
  color: ${props => props.theme.gray};
  background: rgb(240, 240, 240);
  border-radius: 1rem;
  margin-bottom: 3.2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  margin: 0 20rem 5rem 20rem;
  padding: 4.8rem;
  font-size: 2rem;

  button {
    width: 100%;
    margin-top: 2rem;
    padding: 1rem;
    background: #f25aa3;
    // background: ${props => props.theme.primaryLight};
    color: white;
    border: 1px solid #2abbf4;
    border-radius: 0.5rem;
  }

  .smallScreen {
    color: ${props => props.theme.primaryMuted};
    display: none;
    font-size: 3.5rem;
  }

  @media (max-width: 5000px) {
    width: 75%;
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
  }

  @media (max-width: 990px) {
    .bigScreen {
      display: none;
    }
    .smallScreen {
      display: block;
    }
    display: flex;
    flex-direction: column-reverse;
    margin: 1rem auto;
  }

  @media (max-width: 667px) {
    margin: 0 0 5rem 0;
    width: 100%;
    button {
      width: 100%;
      font-size: 1.8rem;
    }
  }

  @media(max-width: 400px) {
    padding: 10px;
    .join {
      display: none
    }
  }
`

export const Form = styled.form`
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-right: 1px dashed black;
  padding-right: 4.8rem;
  label {
    color: ${props => props.theme.primaryMuted};
    font-size: 2rem;
  }
  input,
  textarea {
    width: 100%;
    padding: 0.4rem;
  }
  @media (max-width: 990px) {
    font-size: 2rem;
    border-right: none;
    border-top: 1px dashed black;
    padding-top: 3.2rem;
  }
  button {
    padding: 1rem;
  }
  @media (max-width: 667px) {
    font-size: 2rem;
    width: 100%;
    border-right: none;
    border-top: 1px dashed black;
    margin-top: 2.4rem;
    padding: 3rem 1rem 1rem 1rem;
  }
`

export const FormTitle = styled.h2`
  color: ${props => props.theme.primaryMuted};
  font-size: 3.2rem;
`

export const SocialContainer = styled.div`
  font-size: 1.6rem;
  padding: 0 3.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  button {
    margin: auto;
    display: block;
  }
  a {
    text-decoration: none;
    color: white;
  }
`

export const ProposeForm = styled.form`
  font-size: 1.4rem;
  height: 100%;
  margin: auto;
  padding: 5rem;

  button {
    width: 100%;
    margin-top: 2rem;
    padding: 1rem;
    background: #f25aa3;
    color: white;
    background: ${props => props.theme.primaryLight};
    border-radius: 0.5rem;
  }

  label {
    font-weight: bolder;
    display: block;

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
    justify-content: center;
    flex-direction: column;
  }

  @media(max-width: 450px) {
    height: calc(100vh - ${NAV_HEIGHT} * 2);
    margin-top: calc(${NAV_HEIGHT} * 2);
  }
`
