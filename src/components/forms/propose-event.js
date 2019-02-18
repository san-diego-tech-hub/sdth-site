import React from 'react'
import moment from 'moment'

import encode from 'Utils/encode'
import { useFormInput } from 'Utils/hooks'
import { ProposeForm } from './styles'

function ProposeEvent({ afterSubmit }) {
  const date = moment().format('YYYY-MM-DDTHH:mm')

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
      name.value === '' ||
      location.value === '' ||
      email.value === '' ||
      user.value === '' ||
      start.value === '' ||
      end.value === '' ||
      description.value === ''
    ) {
      return alert('Please fill out all the fields')
    }

    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'event-proposal',

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
        <label htmlFor="user">Your Name</label>
        <input autoFocus name="user" type="text" {...user} id="user" />
      </div>

      <div className="input-field">
        <label htmlFor="email">Email</label>
        <input name="email" type="email" {...email} id="email" />
      </div>

      <div className="input-field">
        <label htmlFor="name">Name of Event</label>
        <input name="name" type="text" {...name} id="name" />
      </div>

      <div className="input-field">
        <label htmlFor="name">Location</label>
        <input name="location" type="text" {...location} id="location" />
      </div>

      <div className="input-field">
        <label htmlFor="start">Start</label>
        <input type="datetime-local" name="start" id="start" {...start} />
      </div>

      <div className="input-field">
        <label htmlFor="end">End</label>
        <input type="datetime-local" name="end" id="end" {...end} />
      </div>

      <div className="input-field">
        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" {...description} />
      </div>

      <button type="submit">Propose Event</button>
    </ProposeForm>
  )
}

export default ProposeEvent
