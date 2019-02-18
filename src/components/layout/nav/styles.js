import styled from 'styled-components'

export const Nav = styled.nav`
  background: ${props => props.theme.mainPurple};
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 3.2rem;
  position: sticky;
  top: 0;
  z-index: 1;
  text-align: center;
  /* height: 7rem; */

  a {
    padding-bottom: 1rem;
    display: block;
    color: #fff;
    text-decoration: none;
  }
`
export const Menu = styled.ul`
  width: 80%;
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
  font-size: 2rem;
  margin: 0 auto !important;
  position: relative;
  text-align: center;

  li {
    margin-bottom: 0 !important;
    padding: 0 1rem;
    white-space: nowrap;
    display: flex;
  }
  li:not(:last-child)::after {
    content: '|';
    color: white;
    margin-left: 2rem;
  }
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

export const DropdownContent = styled.div`
  text-align: left;
  border: 0.05rem solid ${props => props.theme.mainPurple};
  font-weight: normal;
  width: 100%;
  display: none;
  position: absolute;
  background-color: white;
  color: ${props => props.theme.mainPurple};
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  margin-top: 1.5rem;
  img {
    margin-right: 0.5rem;
  }
  a:hover {
    background-color: rgb(204, 233, 250);
  }
  .innerLink {
    padding: 0.5rem;
    display: block;
    color: ${props => props.theme.mainPurple};
    text-decoration: none;
    margin-left: 0.1rem;
  }
`

export const Inner = styled.span`
  padding: 0 2rem;
  @media (max-width: 667px) {
    padding: 0;
  }
`
