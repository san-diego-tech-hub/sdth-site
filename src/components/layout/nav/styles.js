import styled from 'styled-components'
import { NAV_HEIGHT } from 'Utils/constants'

export const Container = styled.div`
  display: flex;
  max-width: 1600px;
  width: 100%;
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
  z-index: 1;

  a {
    color: #fff;
    display: block;
    text-decoration: none;
  }
`
export const Menu = styled.ul`
  align-items: center;
  display: flex;
  font-size: 2rem;
  justify-content: space-around;
  list-style-type: none;
  margin: 0;
  text-align: center;
  width: 80%;

  @media (max-width: 990px) {
    width: 100%;
    font-size: 1.6rem;
    padding: 0 2rem;
    li {
      white-space: pre-line;
    }
    li:not(:last-child)::after {
      content: '';
      margin-left: 0;
    }
  }
  @media (max-width: 667px) {
    width: 100%;
    font-size: 1rem;
    li {
      padding: 0 0.5rem;
    }
  }
`

export const Drop = styled.div`
  position: relative;
  display: inline-block;
  &:hover .content {
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
  border: 0.05rem solid ${props => props.theme.primaryDark};
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
  a:hover {
    background-color: rgb(204, 233, 250);
  }
  .innerLink {
    padding: 0.5rem;
    display: block;
    color: ${props => props.theme.primaryDark};
    text-decoration: none;
    margin-left: 0.1rem;
  }
`
export const Logo = styled.div`
  background: white;
  border-radius: 0 0 50px;
  box-shadow: 0 0 25px rgba(255,255,255,0.5);
  height: 100%;
  width: 350px;

  img {
    margin-bottom: 0;
  }

  @media (max-width: 667px) {
    width: 100%;
  }
`
