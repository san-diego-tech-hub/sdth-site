import React from "react"

export function useFormInput(initValue = "") {
  const [value, setValue] = React.useState(initValue)
  const onChange = e => setValue(e.target.value)

  return { value, onChange }
}

export function useCurator() {
  React.useEffect(() => {
    (function curatorIo() {
      const i = document.createElement("script")
      i.async = 1
      i.src = "https://cdn.curator.io/published/b46d667b-cd85-44f6-9f29-8991bf9f362e.js"
      const e = document.getElementsByTagName("script")[0]
      e.parentNode.insertBefore(i, e)
    }())
  }, [])
}
