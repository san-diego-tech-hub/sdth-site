import React, { useState } from "react"

export function useForm({ fields = [] }) {
  const form = { hasValidationErrors: false }
  form.fieldNames = fields.map(field => field.name)

  fields.forEach(field => {
    form[field.name] = useFormInput(field)
  })

  form.runValidations = () => {
    form.fieldNames.forEach(fieldName => {
      const field = form[fieldName]
      const isValid = field.validate(field.value)
      field.setIsValid(isValid)
      field.updateError(isValid)
    })

    form.hasValidationErrors = form.fieldNames.some(fieldName => {
      const field = form[fieldName]
      return !field.validate(field.value)
    })
  }

  return form
}

export function useFormInput({
  validate = () => true,
  errorMsg = "",
  initialValue = ""
}) {
  const [value, setValue] = useState(initialValue)
  const [isValid, setIsValid] = useState(true)
  const [error, setError] = useState("")

  const updateError = (nextIsValid) => setError(nextIsValid ? "" : errorMsg)

  const onChange = (e) => {
    const nextIsValid = validate(e.target.value)
    setIsValid(nextIsValid)
    setError(nextIsValid ? "" : errorMsg)
    setValue(e.target.value)
  }

  return {
    value,
    onChange,
    validate,
    isValid,
    setIsValid,
    error,
    updateError
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
