import styled from "styled-components"

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

export const Contacts = styled.div`
  margin: 2rem 0;
`

export const Program = styled.div`
  align-items: center;
  background: #eee;
  border-radius: 5px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  color: #333;
  display: flex;
  flex-direction: column;
  margin: 1.5rem;
  padding: 2rem;
  width: 500px;
`

export const ProgramContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .program-description {
    font-size: 1.5rem;
    margin-bottom: 2rem;
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
    background: ${props => props.theme.greenDark};
  }
`

export const SubContainer = styled.div`
  display: flex;
  justify-content: center;
`
