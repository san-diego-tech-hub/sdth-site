import React from "react"

const Html = ({ children, ...props }) => (
  <div
    dangerouslySetInnerHTML={{ __html: children }}
    {...props}
  />
)

export default Html
