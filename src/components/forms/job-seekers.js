import { useForm } from "Utils/hooks"
import React from "react"
import ErrorMsg from "Common/ErrorMsg"
import styled from "styled-components"
import Color from "color"
import gql from "graphql-tag"
import { Mutation } from "react-apollo"
import {
  nameField,
  emailField,
  phoneField,
  websiteField,
  socialField,
  descriptionField
} from "Utils/forms"

export default function jobSeekers() {
  const form = useForm({
    fields: [
      nameField,
      emailField,
      phoneField,
      websiteField,
      socialField,
      descriptionField
    ]
  })

  const ADD_JOB_CANDIDATE = gql`
    mutation {
      insert_jobCandidate (
        objects: [
          {
            name: "${form.name.value}",
            email: "${form.email.value}",
            phoneNumber: "${form.phone.value}"
            website: "${form.website.value}",
            description: "${form.description.value}"
            socialMedia: ["${form.social.value}"]
            imageUrl: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          }
        ]
      )
      {
        returning {
          name
          email
          website
          description
          imageUrl
          socialMedia
          id
        }
      }
    }
    `

  return (
    <Container data-testid="job-seekers">
      <FormTitle className="bigScreen">Looking for work?</FormTitle>
      <Form
        data-testid="job-seekers-form"
        method="post"
        noValidate
      >
        <label htmlFor="name">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          value={form.name.value}
          onChange={form.name.onChange}
          required
        />
        <ErrorMsg data-testid="name-error">
          {form.name.error}
        </ErrorMsg>
        <label htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={form.email.value}
          onChange={form.email.onChange}
          required
        />
        <ErrorMsg data-testid="email-error">
          {form.email.error}
        </ErrorMsg>
        <label htmlFor="phone">
            Phone Number
        </label>
        <input
          id="phone"
          type="phone"
          value={form.phone.value}
          onChange={form.phone.onChange}
          required
        />
        <ErrorMsg data-testid="phone-error">
          {form.phone.error}
        </ErrorMsg>
        <label htmlFor="website">
          Website/Portfolio
        </label>
        <p><small><i>Please include full url (ex. https://www.sandiegotechhub.com/)</i></small></p>
        <input
          id="website"
          value={form.website.value}
          onChange={form.website.onChange}
          required
        />
        <ErrorMsg data-testid="website-error">
          {form.website.error}
        </ErrorMsg>
        <label htmlFor="social">
            LinkedIn
        </label>
        <input
          id="social"
          value={form.social.value}
          onChange={form.social.onChange}
          required
        />
        <br />
        <label htmlFor="description">
          Tell us a little about yourself
        </label>
        <p><small><i>What are you looking for? Describe your skillset.</i></small></p>
        <textarea
          id="description"
          className="form-control"
          value={form.description.value}
          onChange={form.description.onChange}
          required
        />
        <ErrorMsg data-testid="description-error">
          {form.description.error}
        </ErrorMsg>
        <Mutation mutation={ADD_JOB_CANDIDATE}>
          {addJobCandidate => (
            <button type="button" onClick={addJobCandidate}>
              Sign Up
            </button>
          )}
        </Mutation>
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

    &:hover, &:focus {
      background: ${Color("#F03B92").darken(0.1).toString()};
      border: 2px solid #a31f5e;
      cursor: pointer;
    }
  }

  @media (max-width: 990px) {
    border-right: none;
    font-size: 2rem;
    padding: 3rem;
  }

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

  @media (max-width: 990px) {
    border-right: none;
    font-size: 2rem;
  }

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
