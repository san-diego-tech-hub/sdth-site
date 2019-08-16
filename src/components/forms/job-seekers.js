import React from "react"
import styled from "styled-components"
import Color from "color"
import gql from "graphql-tag"
import { Mutation } from "react-apollo"
import { toast } from "react-toastify"
import ErrorMsg from "Common/ErrorMsg"
import { useForm } from "Utils/hooks"
import {
  usernameField,
  emailField,
  phoneField,
  websiteField,
  linkedinField,
  githubField,
  descriptionField
} from "Utils/forms"

export default function JobSeekersForm() {
  const form = useForm({
    fields: [
      usernameField,
      emailField,
      phoneField,
      websiteField,
      linkedinField,
      githubField,
      descriptionField
    ]
  })

  const ADD_JOB_CANDIDATE = gql`
    mutation {
      insert_jobCandidate (
        objects: [
          {
            name: "${form.username.value}",
            email: "${form.email.value}",
            phoneNumber: "${form.phone.value}"
            website: "${form.website.value}",
            description: "${form.description.value}"
            socialMedia: ["${form.linkedin.value}", "${form.github.value}"]
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

  const handleSubmit = () => {
    toast.success("🚀 Thank you for contributing to the network!")
  }

  return (
    <Container data-testid="job-seekers">
      <FormTitle className="bigScreen">Looking for work?</FormTitle>
      <p style={{ textAlign: "center" }}><small><i>fields marked with an asterisk(*) are required</i></small></p>
      <Form
        data-testid="job-seekers-form"
        method="POST"
        onSubmit={form.onSubmit(handleSubmit)}
        noValidate
      >
        <label htmlFor="username">
          Full Name*
          <input
            id="username"
            type="text"
            value={form.username.value}
            onChange={form.username.onChange}
            required
          />
        </label>
        <ErrorMsg data-testid="username-error">
          {form.username.error}
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

        <label htmlFor="phone">
          Phone Number*
          <input
            id="phone"
            type="phone"
            value={form.phone.value}
            onChange={form.phone.onChange}
            required
          />
        </label>
        <ErrorMsg data-testid="phone-error">
          {form.phone.error}
        </ErrorMsg>

        <label htmlFor="website">
          Website/Portfolio
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

        <label htmlFor="github">
          Github
          <input
            id="github"
            value={form.github.value}
            onChange={form.github.onChange}
          />
        </label>
        <ErrorMsg data-testid="github-error">
          {form.github.error}
        </ErrorMsg>

        <label htmlFor="description">
          Tell us a little about yourself*
          <p><small><i>What are you looking for? Describe your skillset.</i></small></p>
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

        <Mutation mutation={ADD_JOB_CANDIDATE}>
          {addJobCandidate => (
            <button type="submit" onClick={addJobCandidate}>
              Submit
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

  input, label, textarea {
    display: block;
    width: 100%;
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

  input, textarea {
    display: block;
    width: 100%;
  }

  textarea {
    resize: vertical;
  }

  @media (max-width: 990px) {
    border-right: none;
    font-size: 2rem;
  }
`

const FormTitle = styled.h2`
  color: ${props => props.theme.primaryMuted};
  font-size: 3.2rem;
  text-align: center;
  margin-bottom: 0;
`
