import styled from "styled-components"

export const Label = styled.span`
  align-items: center;
  border-radius: 2rem;
  box-shadow: 3px 3px 10px rgba(0,0,0,0.1);
  background-color: ${props => props.bgColor || "#adadad"};
  color: ${props => props.color || "white"};
  display: flex;
  font-size: 1.4rem;
  justify-content: center;
  padding: 0.2rem 2.5rem;
  text-transform: capitalize;
  width: fit-content;
`
