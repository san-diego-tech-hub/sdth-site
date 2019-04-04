import React from "react"
import { theme } from "Components/layout/styles"

const EducationIcon = ({ active }) => {
  return (
    <svg
      height="18"
      width="18"
      viewBox="0 0 88 97"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M89.086 24.26l6.659-2.278v-6.327L49.023 2.302 2.302 15.655v6.327l46.721 15.25 33.115-10.808M23.13 36.691v10.6c5.863 5.577 15.13 9.15 25.307 9.15 10.175 0 19.441-3.573 25.304-9.15V29.797m8.816 19.69v-27.73L51.29 13.314m36.33 41.482a5.057 5.057 0 0 1-5.053 5.059 5.055 5.055 0 0 1-5.054-5.059 5.057 5.057 0 0 1 5.054-5.057 5.058 5.058 0 0 1 5.053 5.057zm-7.337 4.694l-2.79 11.388H87.64L84.847 59.49"
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

export default EducationIcon
