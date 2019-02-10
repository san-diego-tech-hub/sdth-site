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
    display: grid;
    grid-template-columns: 90% 1fr;
    font-size: 1.8rem;
    border-bottom: 2px solid #555;
    padding: 1.6rem;
    button {
      border-radius: .5rem;
    }
  }
  .content {
    padding: 1.6rem;
  }
`
