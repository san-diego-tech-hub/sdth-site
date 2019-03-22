import React from "react"
import moment from "moment"
import encode from "Utils/encode"
import { useForm } from "Utils/hooks"
import { notEmpty, usernameField, emailField } from "Utils/forms"
import ErrorMsg from "Common/ErrorMsg"
import { ProposeForm } from "./styles"

const NO_OP = () => {}

function ProposeEvent({ closeModal = NO_OP }) {
  const date = moment().format("YYYY-MM-DDTHH:mm")

  const form = useForm({
    fields: [
      usernameField,
      emailField,
      {
        name: "eventName",
        validate: notEmpty,
        errorMsg: "Please Enter an Event Name"
      },
      {
        name: "location",
        validate: notEmpty,
        errorMsg: "Please Enter a Location"
      },
      {
        name: "start",
        validate: notEmpty,
        errorMsg: "Please pick a Start Time",
        initialValue: date
      },
      {
        name: "end",
        validate: val => new Date(val) > new Date(form.start.value),
        errorMsg: "End Time Must be After Start",
        initialValue: date
      },
      {
        name: "description",
        validate: notEmpty,
        errorMsg: "Please Enter a Description"
      }
    ]
  })

  const handleSubmit = async () => {
    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "event-proposal",

        username: form.username.value,
        email: form.email.value,
        eventName: form.eventName.value,
        location: form.location.value,
        start: form.start.value,
        end: form.end.value,
        description: form.description.value,
      }),
    }).then(res => console.log("RESULT:", res)).catch(console.error)

    closeModal()
  }

  return (
    <ProposeForm
      name="event-proposal"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      data-testid="propose-event"
      method="post"
      onSubmit={form.onSubmit(handleSubmit)}
      noValidate
    >
      <div className="input-field">
        <label htmlFor="username">
          Your Name
          <input
            id="username"
            type="text"
            value={form.username.value}
            onChange={form.username.onChange}
          />
        </label>
        <ErrorMsg data-testid="username-error">
          {form.username.error}
        </ErrorMsg>
      </div>

      <div className="input-field">
        <label htmlFor="email">
          Email
          <input
            id="email"
            type="email"
            value={form.email.value}
            onChange={form.email.onChange}
          />
        </label>
        <ErrorMsg data-testid="email-error">
          {form.email.error}
        </ErrorMsg>
      </div>

      <div className="input-field">
        <label htmlFor="event-name">
          Name of Event
          <input
            id="event-name"
            type="text"
            value={form.eventName.value}
            onChange={form.eventName.onChange}
          />
        </label>
        <ErrorMsg data-testid="event-name-error">
          {form.eventName.error}
        </ErrorMsg>
      </div>

      <div className="input-field">
        <label htmlFor="location">
          Location
          <input
            id="location"
            type="text"
            value={form.location.value}
            onChange={form.location.onChange}
          />
        </label>
        <ErrorMsg data-testid="location-error">
          {form.location.error}
        </ErrorMsg>
      </div>

      <div className="input-field">
        <label htmlFor="start">
          Start
          <input
            id="start"
            type="datetime-local"
            value={form.start.value}
            onChange={form.start.onChange}
          />
        </label>
        <ErrorMsg data-testid="start-error">
          {form.start.error}
        </ErrorMsg>
      </div>

      <div className="input-field">
        <label htmlFor="end">
          End
          <input
            id="end"
            type="datetime-local"
            value={form.end.value}
            onChange={form.end.onChange}
          />
        </label>
        <ErrorMsg data-testid="end-error">
          {form.end.error}
        </ErrorMsg>
      </div>

      <div className="input-field">
        <label htmlFor="description">
          Description
          <textarea
            id="description"
            value={form.description.value}
            onChange={form.description.onChange}
          />
        </label>
        <ErrorMsg data-testid="description-error">
          {form.description.error}
        </ErrorMsg>
      </div>

      <button data-testid="submit" type="submit" className="submit">Propose Event</button>
      <button type="button" className="cancel" onClick={closeModal}>Cancel</button>
    </ProposeForm>
  )
}

export default ProposeEvent
