import styled from "styled-components"

export const StyledDetails = styled.aside`
  z-index: 1;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 1px 1px 1px #555;
  max-width: 30rem;
  font-size: 1.6rem;
  position: absolute;
  top: ${props => props.y}px;
  left: ${props => props.x}px;

  .header {
    display: flex;
    justify-content: space-between;
    font-size: 1.4rem;
    background: ${props => props.theme.primary};
    color: white;
    padding: 1.6rem;
    div {
      display: flex;
      flex-direction: column;
      text-align: left;
    }
    .start {
      font-size: 1rem;
      font-weight: normal;
      display: inline;
    }
    button {
      padding: 0;
      border-radius: 0.5rem;
      border: none;
      background: none;
      color: white;
    }
    .close-details {
        color: rgba(255, 255, 255, 0.5);
        padding: 5px;
        padding-left: 20px;
        &:hover {
          color: white;
          cursor: pointer;
        }
      }
  }
  .content {
    font-size: 1.2rem;
    padding: 1.6rem;
    text-align: left;
  }

`
