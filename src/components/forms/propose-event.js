import React from 'react'
import moment from 'moment'

import encode from '../../utils/encode'
import { ProposeForm } from './styles'
import { useFormInput } from '../../utils/hooks'

function ProposeEvent({ afterSubmit }) {
  const date = moment().format('YYYY-MM-DDTHH:mm')
  const name = useFormInput()
  const location = useFormInput()
  const start = useFormInput(date)
  const end = useFormInput(date)
  const description = useFormInput()

  const handleSubmit = async e => {
    e.preventDefault()

    if (
      name.value === '' ||
      location.value === '' ||
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
      {/* <input type="hidden" name="form-name" value="event-proposal" /> */}
      <div className="input">
        <label htmlFor="name">Name</label>
        <input name="name" type="text" {...name} id="name" />
      </div>

      <div className="input">
        <label htmlFor="name">Location</label>
        <input name="location" type="text" {...location} id="location" />
      </div>

      <div className="input">
        <label htmlFor="start">Start</label>
        <input type="datetime-local" name="start" id="start" {...start} />
      </div>

      <div className="input">
        <label htmlFor="end">End</label>
        <input type="datetime-local" name="end" id="end" {...end} />
      </div>

      <div className="input">
        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" {...description} />
      </div>

      <button type="submit">Propose Event</button>

      {/* <DatePicker selected={end.value} onChange={end.onChange} /> */}
    </ProposeForm>
  )
}

export default ProposeEvent
