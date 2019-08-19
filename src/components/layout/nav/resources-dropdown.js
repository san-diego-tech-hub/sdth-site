import React, { useContext } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import AppContext from "Utils/context"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import FormsIcon from "Components/icons/FormsIcon"
import NetworkIcon from "Components/icons/NetworkIcon"

const resourceList = [
  { name: "Network", icon: NetworkIcon },
  { name: "Forms", icon: FormsIcon },
]

const ResourcesDropDown = () => {
  const { path } = useContext(AppContext)
  const isAnyActive = resourceList.find(resource => {
    return path.includes(`/${resource.name.toLowerCase()}`)
  })

  return (
    <Drop tabIndex="0" aria-haspopup="true" active={isAnyActive}>
      <Label>
        RESOURCES <CaretIcon icon="caret-down" />
      </Label>
      <DropdownLinks className="content">
        {resourceList.map((resource) => {
          const resourcePath = `/${resource.name.toLowerCase()}`
          const isActive = path.includes(resourcePath)

          return (
            <div key={resource.name}>
              <Link
                activeClassName="active"
                className={`innerLink ${isActive ? "active" : ""}`}
                to={resourcePath}
              >
                <resource.icon active={isActive} />
                <span style={{ marginLeft: "1rem" }}>
                  {resource.name}
                </span>
              </Link>
            </div>
          )
        })}
      </DropdownLinks>
    </Drop>
  )
}

export const CaretIcon = styled(FontAwesomeIcon)`
  margin-left: 5px;
`

export const Label = styled.div`
  width: 100%;
`

export const Drop = styled.li`
  align-items: center;
  border-bottom: ${props => {
    return props.active
      ? "1rem solid #2ABBF4"
      : "1rem solid transparent"
  }};
  display: flex;
  text-align: center;
  flex-grow: 1;
  height: 100%;
  margin: 0;
  position: relative;

  &:hover .content,
  &:focus-within .content {
    display: block;
  }
`

export const DropdownLinks = styled.div`
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
    background: #f0f0f0;
    border-radius: 3px;
  }

  .active {
    background: ${props => props.theme.primaryWhite};
    color: ${props => props.theme.primaryMutedLight} !important;
    border-radius: 3px;

    &:hover,
    &:focus {
      background: ${props => props.theme.primaryWhite};
      cursor: default;
    }
  }

  .innerLink {
    align-items: center;
    color: ${props => props.theme.primaryDark};
    display: flex;
    padding: 1rem 2rem;
    text-decoration: none;
    width: 100%;
  }
`

export default ResourcesDropDown
