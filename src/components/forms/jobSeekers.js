import React, { useState } from "react"
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


const ADD_JOB_CANDIDATE = gql`
  mutation addJobCandidate(
    $name: name!,
    $email: String!,
    $phoneNumber: String!,
    $website: String!,
    $description: String!,
    $socialMedia: json!,
    $imageUrl: String!
  ) {
    insert_jobCandidate (
      objects: [
        {
          name: $name,
          email: $email,
          phoneNumber: $phoneNumber,
          website: $website,
          description: $description,
          socialMedia: $socialMedia,
          imageUrl: $imageUrl
        }
      ]
    )
    {
      returning {
        name
        email
        website
        description
        phoneNumber
        imageUrl
        socialMedia
        id
      }
    }
  }
  `

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

  const [image, setImage] = useState("")
  const [loading, setLoading] = useState(false)

  const uploadImage = async e => {
    const { files } = e.target
    const data = new FormData()
    data.append("file", files[0])
    data.append("upload_preset", "jobSeekers")


    setLoading(true)
    const res = await fetch(
      process.env.CLOUDINARY_URL,
      {
        method: "POST",
        body: data
      }
    )

    const file = await res.json()
    setImage(file.secure_url)
    setLoading(false)
  }

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


        <div className="form_line">
          Upload Photo
          <Field>
            <input
                onChange={uploadImage}
                type="file"
                accept="image/*"
                placeholder="Upload an Image"
                required
            />
          </Field>
          {loading ? (
            <h3>Loading...</h3>
          ) : (
            <>
              <img src={image}
              style={{ width: "250px", margin: "0 auto" }}
              alt=""
              />
            </>
          )}
        </div>

        <Mutation mutation={ADD_JOB_CANDIDATE}>
          {addJobCandidate => (
            <button type="submit"
            onClick={() => addJobCandidate({
              variables: {
                name: form.username.value ? form.username.value : null,
                email: form.email.value ? form.email.value : null,
                phoneNumber: form.phone.value ? form.phone.value : null,
                website: form.website.value,
                description: form.description.value ? form.description.value : null,
                socialMedia: [form.linkedin.value, form.github.value],
                imageUrl: image
              }
            })}
            >
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

const Field = styled.div`
    margin-bottom: 2rem;
    border: 3px solid #E8E9F6;
    background: #fff;
    padding: .5rem 1rem;
    &:focus {
        outline: none;
    }
`
