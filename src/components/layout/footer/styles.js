import { Link } from "gatsby"
import styled from "styled-components"

export const Container = styled.footer`
  background: rgb(239, 239, 239);
  display: flex;
  justify-content: center;
  margin-top: 10rem;
  padding: 1.6rem;
`

export const InnerDiv = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
`

export const InternalLink = styled(Link)`
  color: ${props => props.theme.primary};
  font-size: 2rem;
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`
