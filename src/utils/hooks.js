import React from 'react'

export function useFormInput(initValue = '', date = false) {
  const [value, setValue] = React.useState(initValue)
  const onChange = e => setValue(e.target.value)

  return { value, onChange }
}

export function useCurator() {
  React.useEffect(() => {
    (function(){
      var i, e, d = document, s = "script";i = d.createElement("script");i.async = 1;
      i.src = "https://cdn.curator.io/published/b46d667b-cd85-44f6-9f29-8991bf9f362e.js";
      e = d.getElementsByTagName(s)[0];e.parentNode.insertBefore(i, e);
      })();
  }, [])
}
