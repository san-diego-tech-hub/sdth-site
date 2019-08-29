import React from "react"
import { theme } from "Components/layout/styles"

const FormsIcon = ({ active }) => {
  return (
    <svg
      height="18"
      width="18"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >

      <path
        d="M17.728,4.419H2.273c-0.236,0-0.429,0.193-0.429,0.429v10.304c0,0.234,0.193,0.428,0.429,0.428h15.455c0.235,0,0.429-0.193,0.429-0.428V4.849C18.156,4.613,17.963,4.419,17.728,4.419 M17.298,14.721H2.702V9.57h14.596V14.721zM17.298,8.712H2.702V7.424h14.596V8.712z M17.298,6.566H2.702V5.278h14.596V6.566z M9.142,13.005c0,0.235-0.193,0.43-0.43,0.43H4.419c-0.236,0-0.429-0.194-0.429-0.43c0-0.236,0.193-0.429,0.429-0.429h4.292C8.948,12.576,9.142,12.769,9.142,13.005"
        fill="none"
        fillRule="evenodd"
        stroke={
          active
            ? theme.primaryMutedLight
            : theme.primaryDark
        }
        strokeWidth="0.62"
      />
    </svg>
  )
}

export default FormsIcon
