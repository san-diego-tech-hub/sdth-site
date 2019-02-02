import React from 'react'

// import styles from './avatar-card.module.css'

const AvatarCard = ({ lead }) => (
  <div>
    <img
      width="150"
      src={require(`../../images/${lead.photo}.png`)}
      alt={`${lead.name}'s Avatar`}
    />
    <h4>{lead.name}</h4>
    <div>{lead.email}</div>

    <p>{lead.bio}</p>
  </div>
)

export default AvatarCard
