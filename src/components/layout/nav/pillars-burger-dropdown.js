import React, { useContext } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import AppContext from "Utils/context"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import CommunityIcon from "Components/icons/CommunityIcon"
import EducationIcon from "Components/icons/EducationIcon"
import InclusionIcon from "Components/icons/InclusionIcon"
import InnovationIcon from "Components/icons/InnovationIcon"
import TalentIcon from "Components/icons/TalentIcon"

const pillarList = [
  { name: "Community", icon: CommunityIcon },
  { name: "Education", icon: EducationIcon },
  { name: "Inclusion", icon: InclusionIcon },
  { name: "Innovation", icon: InnovationIcon },
  { name: "Talent", icon: TalentIcon }
]

const PillarsBurgerDropDown = () => {
  const { path } = useContext(AppContext)
  const isAnyActive = pillarList.find(pillar => {
    return path.includes(`/${pillar.name.toLowerCase()}`)
  })

  return (
    <Drop tabIndex="0" aria-haspopup="true" active={isAnyActive}>
      <Label>
        PILLARS <CaretIcon icon="caret-down" />
      </Label>
      <DropdownLinks className="content">
        {pillarList.map((pillar) => {
          const pillarPath = `/${pillar.name.toLowerCase()}`
          const isActive = path.includes(pillarPath)

          return (
            <div key={pillar.name}>
              <Link
                activeClassName="active"
                className={`innerLink ${isActive ? "active" : ""}`}
                to={pillarPath}
              >
                <pillar.icon active={isActive} />
                <span style={{ marginLeft: "1rem" }}>
                  {pillar.name}
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
  align-items: left;
  width: 50%;
  font-size: 2rem;
  cursor: pointer;
`

export const Drop = styled.li`
  align-items: left;
  display: flex;
  flex-grow: 1;
  position: relative;

  &:focus-within .content {
    display: block;
  }

  &:focus {
    outline: none;
  }
`

export const DropdownLinks = styled.div`
  background-color: white;
  border-radius: 3px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  color: ${props => props.theme.primaryWhite};
  display: none;
  font-weight: normal;
  min-width: 160px;
  position: absolute;
  text-align: left;
  top: 40px;
  width: 100%;
  z-index: 1;
  font-size: 2rem;

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

    &:hover,
    &:focus {
      background: ${props => props.theme.primaryWhite};
      cursor: pointer;
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

export default PillarsBurgerDropDown
