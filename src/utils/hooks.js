import React from "react"

export function useFormInput(
  validate = () => true,
  errorMsg = "",
  initialValue = ""
) {
  const [value, setValue] = React.useState(initialValue)
  const [isValid, setIsValid] = React.useState(true)

  const onChange = e => {
    setIsValid(validate(e.target.value))
    setValue(e.target.value)
  }

  return {
    value,
    onChange,
    validate,
    isValid,
    setIsValid,
    errorMsg
  }
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
