import styled from "styled-components"
import { NAV_HEIGHT } from "Utils/constants"

export const NetworkContainer = styled.main`
  margin: ${NAV_HEIGHT} auto;
  padding: 0;
  width: 100vw;
}
`

export const Header = styled.div`
  background: linear-gradient(${props => `${props.theme.primary}, ${props.theme.primaryLight}`});
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const Title = styled.h1`
  color: white;
  text-shadow: 1px 1px 5px rgba(0,0,0,0.3);
`
