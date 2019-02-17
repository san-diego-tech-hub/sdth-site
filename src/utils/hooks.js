import React from 'react'

export function useFormInput(initValue = '', date = false) {
  const [value, setValue] = React.useState(initValue)
  const onChange = e => setValue(e.target.value)

  return { value, onChange }
}
