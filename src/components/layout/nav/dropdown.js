import React from "react"
import { Link } from "gatsby"

import CommunityIcon from "../../../images/Icons/communityIcon"
import EducationIcon from "../../../images/Icons/educationIcon"
import InclusionIcon from "../../../images/Icons/inclusionIcon"
import InnovationIcon from "../../../images/Icons/innovationIcon"
import TalentIcon from "../../../images/Icons/talentIcon"

import { Drop, DropdownContent } from "./styles"

const pillarIcons = {
  community: <CommunityIcon />,
  education: <EducationIcon />,
  inclusion: <InclusionIcon />,
  innovation: <InnovationIcon />,
  talent: <TalentIcon />,
}

const Dropdown = ({ children, items = [], style }) => (
  <Drop tabIndex="0" aria-haspopup="true" style={style}>
    {children}
    <DropdownContent className="content">
      {items.map((item) => (
        <div key={item.text} style={{}}>
          <Link
            className="innerLink"
            to={item.url}
            style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", padding: "0px 16px" }}
            activeStyle={{ fontWeight: "700", borderRadius: "3px" }}
          >
            {item.text}
            {pillarIcons[item.icon]}
          </Link>
          <div style={{ clear: "both" }} />
        </div>
      ))}
    </DropdownContent>
  </Drop>
)

export default Dropdown
