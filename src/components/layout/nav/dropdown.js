import React from "react"
import { Link } from "gatsby"

import communityIcon from "Images/nav_community.svg"
import educationIcon from "Images/nav_education.svg"
import inclusionIcon from "Images/nav_inclusion.svg"
import innovationIcon from "Images/nav_innovation.svg"
import talentIcon from "Images/nav_talent.svg"
import { Drop, DropdownContent } from "./styles"

const pillarIcons = {
  community: communityIcon,
  education: educationIcon,
  inclusion: inclusionIcon,
  innovation: innovationIcon,
  talent: talentIcon,
}

const Dropdown = ({ children, items = [], style }) => (
  <Drop tabIndex="0" aria-haspopup="true" style={style}>
    {children}
    <DropdownContent className="content">
      {items.map((item) => (
        <div key={item.text} style={{ border: "1px solid #4c4e7a" }}>
          <Link
            className="innerLink"
            to={item.url}
            style={{ float: "left", width: "100%" }}
            activeStyle={{ fontWeight: "700", background: "rgb(204, 233, 250)" }}
          >
            <img src={pillarIcons[item.icon]} width="25" alt={item.icon} />
            {item.text}
          </Link>
          <div style={{ clear: "both" }} />
        </div>
      ))}
    </DropdownContent>
  </Drop>
)

export default Dropdown
