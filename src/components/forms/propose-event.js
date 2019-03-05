import React from "react"
import moment from "moment"

import encode from "Utils/encode"
import { useFormInput } from "Utils/hooks"
import { ProposeForm, ErrorMsg } from "./styles"

function ProposeEvent({ closeModal }) {
  const date = moment().format("YYYY-MM-DDTHH:mm")

  const notEmpty = (val) => val.length > 0

  const user = useFormInput(notEmpty, "Please Enter Your Name")
  const email = useFormInput(val => /@./.test(val), "Email must be Valid")
  const eventName = useFormInput(notEmpty, "Please Enter an Event Name")
  const location = useFormInput(notEmpty, "Please Enter a Location")
  const start = useFormInput(notEmpty, "Please pick a Start Time", date)
  const end = useFormInput(val => new Date(val) > new Date(start.value), "End Time Must be After Start", date)
  const description = useFormInput(notEmpty, "Please Enter a Description")

  const formFields = [
    user,
    eventName,
    location,
    start,
    end,
    description
  ]

  const handleSubmit = async e => {
    e.preventDefault()

    formFields.forEach(field => {
      field.setIsValid(field.validate(field.value))
    })

    if (
      formFields.some(field => !field.validate(field.value))
    ) {
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
          <input id="user" type="text" value={user.value} onChange={user.onChange} />
        </label>
        <ErrorMsg>{user.isValid ? "" : user.errorMsg }</ErrorMsg>
      </div>

      <div className="input-field">
        <label htmlFor="email">
          Email
          <input id="email" type="email" value={email.value} onChange={email.onChange} />
        </label>
        <ErrorMsg>{email.isValid ? "" : email.errorMsg }</ErrorMsg>
      </div>

      <div className="input-field">
        <label htmlFor="event-name">
          Name of Event
          <input id="event-name" type="text" value={eventName.value} onChange={eventName.onChange} />
        </label>
        <ErrorMsg>{eventName.isValid ? "" : eventName.errorMsg }</ErrorMsg>
      </div>

      <div className="input-field">
        <label htmlFor="location">
          Location
          <input id="location" type="text" value={location.value} onChange={location.onChange} />
        </label>
        <ErrorMsg>{location.isValid ? "" : location.errorMsg }</ErrorMsg>
      </div>

      <div className="input-field">
        <label htmlFor="start">
          Start
          <input id="start" type="datetime-local" value={start.value} onChange={start.onChange} />
        </label>
        <ErrorMsg>{start.isValid ? "" : start.errorMsg }</ErrorMsg>
      </div>

      <div className="input-field">
        <label htmlFor="end">
          End
          <input id="end" type="datetime-local" value={end.value} onChange={end.onChange} />
        </label>
        <ErrorMsg>{end.isValid ? "" : end.errorMsg }</ErrorMsg>
      </div>

      <div className="input-field">
        <label htmlFor="description">
          Description
          <textarea id="description" value={description.value} onChange={description.onChange} />
        </label>
        <ErrorMsg>{description.isValid ? "" : description.errorMsg }</ErrorMsg>
      </div>

      <button type="submit">Propose Event</button>
      <button type="button" className="cancel" onClick={closeModal}>Cancel</button>
    </ProposeForm>
  )
}

export default ProposeEvent
