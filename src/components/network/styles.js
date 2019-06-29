import styled from "styled-components"
import { NAV_HEIGHT } from "Utils/constants"
import Img from "gatsby-image"

export const NetworkContainer = styled.main`
  margin: ${NAV_HEIGHT} auto;
  max-width: 1200px;
  padding: 0 0.5rem;
  width: 100%;
}
`

export const Header = styled.div`
  background: linear-gradient(${props => `${props.theme.primary}, ${props.theme.primaryLight}`});
  border-radius: 0 0 5px 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const Logo = styled(Img)`
  align-self: flex-start;
  margin: 1rem;
  margin-bottom: 0;
  width: 300px;
`
