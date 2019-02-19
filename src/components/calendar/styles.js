import styled from 'styled-components'

export const StyledDetails = styled.aside`
  z-index: 99999;
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
    border-bottom: 2px solid #555;
    background: ${props => props.theme.primaryDark};
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
  }
  .content {
    font-size: 1.2rem;
    padding: 1.6rem;
    text-align: left;
  }
`
