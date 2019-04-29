import React from "react"

const AvatarCard = ({ lead }) => (
  <div>
    <img
      width="150"
      src={require(`../../images/team/${lead.photo}.png`)}
      alt={`${lead.name}'s Avatar`}
    />
    <h4>{lead.name}</h4>
    <div>{lead.email}</div>

    <p>{lead.bio}</p>
  </div>
)

export default AvatarCard
