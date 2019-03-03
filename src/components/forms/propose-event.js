import React from "react"
import moment from "moment"

import encode from "Utils/encode"
import { useFormInput } from "Utils/hooks"
import { ProposeForm } from "./styles"

function ProposeEvent({ closeModal }) {
  const date = moment().format("YYYY-MM-DDTHH:mm")

  const user = useFormInput()
  const email = useFormInput()
  const eventName = useFormInput()
  const location = useFormInput()
  const start = useFormInput(date)
  const end = useFormInput(date)
  const description = useFormInput()

  const handleSubmit = async e => {
    e.preventDefault()

    if (
      user.value === "" // greater than one character
      || email.value === "" // look for npm package
      || eventName.value === "" // greater than one character
      || location.value === "" // greater than one character
      || start.value === "" // must occur at a later date than current date
      || end.value === "" // must occur at a later date than current date
      || description.value === "" // greater than one character
    ) {
      alert("Please fill out all the fields")
      return
    }

    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "event-proposal",

        user: user.value,
        email: email.value,
        eventName: eventName.value,
        location: location.value,
        start: start.value,
        end: end.value,
        description: description.value,
      }),
    })

    closeModal()
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
        <label htmlFor="event-name">
          Name of Event
          <input id="event-name" type="text" {...eventName} />
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
      <button type="button" className="cancel" onClick={closeModal}>Cancel</button>
    </ProposeForm>
  )
}

export default ProposeEvent
