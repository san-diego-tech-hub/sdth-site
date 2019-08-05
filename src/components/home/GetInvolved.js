import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const GetInvolved = () => (
  <Container>
    <Button to="/get-involved">
      Get Involved
    </Button>
  </Container>
)

const Button = styled(Link)`
  background: ${props => props.theme.greenDark};
  border-radius: 5px;
  box-shadow: 2px 2px 3px rgba(0,0,0,0.2);
  color: white;
  font-size: 2.5rem;
  margin: 0 auto;
  padding: 1rem 4rem;
  text-decoration: none;

  &:hover, &:focus {
    background: ${props => props.theme.green};
    cursor: pointer;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`

export default GetInvolved
