import React from "react"

const ErrorMsg = ({ children, ...props }) => (
  <div
    style={{ color: "red", height: "2rem" }}
    {...props}
  >
    {children}
  </div>
)

export default ErrorMsg
