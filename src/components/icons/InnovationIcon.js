import React from "react"
import { theme } from "Components/layout/styles"

const InnovationIcon = ({ active }) => {
  return (
    <svg
      height="18"
      width="18"
      viewBox="0 0 88 97"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.177 91.215H50.58m-17.754 9.818H44.93m-6.052-92.67V1.757M70.01 22.698l5.376-5.37m-73.016 0l5.375 5.369m31.133 59.065V56.803m-.017 0l-8.91-8.896m8.943 8.896l8.91-8.896m19.095-.225c0 6.961-1.433 11.536-4.944 15.76-1.19 1.286-2.413 2.451-3.596 3.578-3.96 3.77-7.04 7.65-8.608 15.244H28.124c-1.561-7.577-4.622-11.453-8.567-15.216-1.179-1.127-2.398-2.29-3.58-3.574C12.63 59.264 11 54.097 11 47.682 11 32.418 23.532 20 38.938 20c15.417 0 27.961 12.418 27.961 27.682z"
        fill="none"
        fillRule="evenodd"
        stroke={
          active
            ? theme.primaryMutedLight
            : theme.primaryDark
        }
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default InnovationIcon
