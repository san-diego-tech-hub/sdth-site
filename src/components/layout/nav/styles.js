import styled from "styled-components"
import { NAV_HEIGHT } from "Utils/constants"

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  height: fit-content;
  max-width: 1600px;
  width: 100%;
`

export const Drop = styled.div`
  padding: 0 1rem;
  position: relative;
  display: inline-block;

  &:hover .content,
  &:focus-within .content {
    display: block;
  }
`

export const DropItem = styled.li`
  align-items: center;
  display: flex;
  height: 100%;
  margin: 0;
`

export const DropdownContent = styled.div`
  background-color: white;
  border-radius: 3px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  color: ${props => props.theme.primaryDark};
  display: none;
  font-weight: normal;
  min-width: 160px;
  position: absolute;
  text-align: left;
  top: 60px;
  width: 100%;
  z-index: 1;
  img {
    margin-right: 0.5rem;
  }
  a:hover,
  a:focus {
    color: ${props => props.theme.primaryDark};
    background-color: #F0F0F0;
    border-radius: 3px;
  }
  .innerLink {
    padding: 0.5rem;
    display: block;
    color: ${props => props.theme.primaryDark};
    text-decoration: none;
  }
`

export const Logo = styled.div`
  background: white;
  border-radius: 0 0 50px;
  box-shadow: 1px 3px 3px rgba(255,255,255,0.2);
  height: ${NAV_HEIGHT};
  width: 350px;

  img {
    margin-bottom: 0;
  }

  @media (max-width: 1140px) {
    display: none;
  }

  @media (max-width: 900px) {
    display: block;
  }

  @media (max-width: 450px) {
    display: none;
    width: 100%;
  }
`

export const Menu = styled.ul`
  align-items: center;
  display: flex;
  flex-grow: 3;
  font-size: 2rem;
  height: ${NAV_HEIGHT};
  justify-content: stretch;
  list-style-type: none;
  margin: 0;
  min-width: 915px;
  text-align: center;

  @media(max-width: 900px) {
    display: none;
  }
`

export const Nav = styled.nav`
  background: ${props => props.theme.primary};
  color: #fff;
  display: flex;
  height: ${NAV_HEIGHT};
  justify-content: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  transition: box-shadow 0.5s ease-in-out;
  z-index: 2;

  a {
    color: #fff;
    display: block;
    text-decoration: none;
  }

  &.box-shadow {
    box-shadow:
      0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14),
      0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    transition: box-shadow 0.5s ease-in-out;
  }
`

export const SmallLogo = styled.div`
  img {
    height: ${NAV_HEIGHT};
    padding: 8px;
  }

  @media(min-width: 450px) {
    display: none;
  }
`

export const Spacer = styled.div`
  height: ${NAV_HEIGHT};
  width: 200px;
  @media(min-width: 450px) {
    display: none;
  }
`
