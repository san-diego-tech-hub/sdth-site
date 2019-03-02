import React from "react"
import moment from "moment"

import encode from "Utils/encode"
import { useFormInput } from "Utils/hooks"
import { ProposeForm } from "./styles"

function ProposeEvent({ afterSubmit }) {
  const date = moment().format("YYYY-MM-DDTHH:mm")

  const user = useFormInput()
  const name = useFormInput()
  const email = useFormInput()
  const location = useFormInput()
  const start = useFormInput(date)
  const end = useFormInput(date)
  const description = useFormInput()

  const handleSubmit = async e => {
    e.preventDefault()

    if (
      name.value === ""
      || location.value === ""
      || email.value === ""
      || user.value === ""
      || start.value === ""
      || end.value === ""
      || description.value === ""
    ) {
      alert("Please fill out all the fields")
      return
    }

    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "event-proposal",

        name: name.value,
        location: location.value,
        user: user.value,
        email: email.value,
        start: start.value,
        end: end.value,
        description: description.value,
      }),
    })

    afterSubmit()
  }

  return (
    <ProposeForm
      name="event-proposal"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      method="post"
      onSubmit={handleSubmit}
    >
      <div className="input-field">
        <label htmlFor="user">
          Your Name
          <input id="user" type="text" {...user} />
        </label>
      </div>

      <div className="input-field">
        <label htmlFor="email">
          Email
          <input id="email" type="email" {...email} />
        </label>
      </div>

      <div className="input-field">
        <label htmlFor="name">
          Name of Event
          <input id="name" type="text" {...name} />
        </label>
      </div>

      <div className="input-field">
        <label htmlFor="location">
          Location
          <input id="location" type="text" {...location} />
        </label>
      </div>

      <div className="input-field">
        <label htmlFor="start">
          Start
          <input id="start" type="datetime-local" {...start} />
        </label>
      </div>

      <div className="input-field">
        <label htmlFor="end">
          End
          <input id="end" type="datetime-local" {...end} />
        </label>
      </div>

      <div className="input-field">
        <label htmlFor="description">
          Description
          <textarea id="description" {...description} />
        </label>
      </div>

      <button type="submit">Propose Event</button>
    </ProposeForm>
  )
}

export default ProposeEvent
