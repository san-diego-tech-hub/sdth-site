import { useForm } from "Utils/hooks"
import React from "react"
import ErrorMsg from "Common/ErrorMsg"
import styled from "styled-components"
import Color from "color"
import {
  usernameField,
  emailField,
  addressField,
  websiteField,
  linkedinField,
  facebookField,
  twitterField,
  descriptionField,
  imageUrlField
} from "Utils/forms"

export default function Sponsors() {
  const form = useForm({
    fields: [
      usernameField,
      emailField,
      addressField,
      websiteField,
      linkedinField,
      facebookField,
      twitterField,
      descriptionField,
      imageUrlField
    ]
  })

  return (
    <Container data-testid="sponsors">
      <FormTitle className="bigScreen">Want to sponsor an event?</FormTitle>
      <p><small><i>fields marked with an asterisk(*) are required</i></small></p>
      <Form
        data-testid="sponsors-form"
        method="post"
        noValidate
      >
        <label htmlFor="name">
          Name*
          <input
            id="name"
            type="text"
            value={form.name.value}
            onChange={form.name.onChange}
            required
          />
        </label>
        <ErrorMsg data-testid="name-error">
          {form.name.error}
        </ErrorMsg>
        <label htmlFor="email">
          Email*
          <input
            id="email"
            type="email"
            value={form.email.value}
            onChange={form.email.onChange}
            required
          />
        </label>
        <ErrorMsg data-testid="email-error">
          {form.email.error}
        </ErrorMsg>
        <label htmlFor="address">
          Company Address
          <input
            id="address"
            value={form.address.value}
            onChange={form.address.onChange}
          />
        </label>
        <ErrorMsg data-testid="address-error">
          {form.address.error}
        </ErrorMsg>
        <label htmlFor="website">
          Website
          <p><small><i>Please include full url (ex. https://www.sandiegotechhub.com)</i></small></p>
          <input
            id="website"
            value={form.website.value}
            onChange={form.website.onChange}
          />
        </label>
        <ErrorMsg data-testid="website-error">
          {form.website.error}
        </ErrorMsg>
        <label htmlFor="linkedin">
          LinkedIn
          <input
            id="linkedin"
            value={form.linkedin.value}
            onChange={form.linkedin.onChange}
          />
        </label>
        <ErrorMsg data-testid="linkedin-error">
          {form.linkedin.error}
        </ErrorMsg>
        <label htmlFor="facebook">
          Facebook
          <input
            id="facebook"
            value={form.facebook.value}
            onChange={form.facebook.onChange}
          />
        </label>
        <ErrorMsg data-testid="facebook-error">
          {form.facebook.error}
        </ErrorMsg>
        <label htmlFor="twitter">
          Twitter
          <input
            id="twitter"
            value={form.twitter.value}
            onChange={form.twitter.onChange}
          />
        </label>
        <ErrorMsg data-testid="twitter-error">
          {form.twitter.error}
        </ErrorMsg>
        <label htmlFor="description">
          Who are you?*
          <p><small><i>What do you do? Why do you want to contribute?</i></small></p>
          <textarea
            id="description"
            className="form-control"
            value={form.description.value}
            onChange={form.description.onChange}
            required
          />
        </label>
        <ErrorMsg data-testid="description-error">
          {form.description.error}
        </ErrorMsg>
        <label htmlFor="image">
          Image URL
          <input
            id="image"
            value={form.image.value}
            onChange={form.image.onChange}
          />
        </label>
        <ErrorMsg data-testid="image-error">
          {form.image.error}
        </ErrorMsg>
        <button type="button">
          Sign Up
        </button>
      </Form>
    </Container>
  )
}

const Container = styled.div`
  background: rgb(240, 240, 240);
  border-radius: 1rem;
  color: ${props => props.theme.gray};
  display: grid;
  font-size: 2rem;
  grid-gap: 2rem;
  margin: 0 auto;
  margin-bottom: 3.2rem;
  padding: 4.8rem;
  width: 69%;
​
  .bigScreen {
    font-size: 3rem;
  }

  button {
    background: #F03B92;
    border: 2px solid transparent;
    border-radius: 0.5rem;
    color: rgb(245, 245, 245);
    margin-top: 2rem;
    padding: 1rem;
    width: 100%;
    ​
    &:hover, &:focus {
      background: ${Color("#F03B92").darken(0.1).toString()};
      border: 2px solid #a31f5e;
      cursor: pointer;
    }
  }
​
  @media (max-width: 990px) {
    border-right: none;
    font-size: 2rem;
    padding: 3rem;
  }
​
  @media (max-width: 667px) {
    border-right: none;
    font-size: 2rem;
    margin-top: 2.4rem;
    padding: 3rem 1rem 1rem 1rem;
    width: 100%;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    color: ${props => props.theme.primaryMuted};
    font-size: 2rem;
  }

  button {
    padding: 1rem;
  }

  textarea {
    resize: vertical;
  }
​
  @media (max-width: 990px) {
    border-right: none;
    font-size: 2rem;
  }
​
  @media (max-width: 667px) {
    border-right: none;
    font-size: 2rem;
  }
`

const FormTitle = styled.h2`
  color: ${props => props.theme.primaryMuted};
  font-size: 3.2rem;
  text-align: center;
`
