import React from "react"
import moment from "moment"
import { toast } from "react-toastify"
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
        errorMsg: "Please enter an event name"
      },
      {
        name: "location",
        validate: notEmpty,
        errorMsg: "Please enter a location"
      },
      {
        name: "start",
        validate: notEmpty,
        errorMsg: "Please pick a start time",
        initialValue: date
      },
      {
        name: "end",
        validate: val => new Date(val) > new Date(form.start.value),
        errorMsg: "End time must be after start",
        initialValue: date
      },
      {
        name: "description",
        validate: notEmpty,
        errorMsg: "Please enter a description"
      }
    ]
  })

  const handleSubmit = () => {
    fetch("/", {
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
    })
      .then(() => {
        closeModal()
        toast.success("🚀 New event submitted!")
      })
      .catch((err) => toast.error(`⚠️ ${err}`))
  }

  return (
    <ProposeForm
      name="event-proposal"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      method="post"
      onSubmit={form.onSubmit(handleSubmit)}
      noValidate
    >
      <div className="form-header">Propose New Event</div>
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
            rows="10"
            value={form.description.value}
            onChange={form.description.onChange}
          />
        </label>
        <ErrorMsg data-testid="description-error">
          {form.description.error}
        </ErrorMsg>
      </div>

      <button
        className="submit"
        data-testid="submit"
        type="submit"
      >
        Propose Event
      </button>
      <button
        className="cancel"
        type="button"
        onClick={closeModal}
      >
        Cancel
      </button>
    </ProposeForm>
  )
}

export default ProposeEvent
