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
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  width: 100vw;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`

export const InternalLink = styled(Link)`
  color: ${props => props.theme.primaryMuted};
  font-size: 2rem;
  margin: 2rem;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`
