import React, { useState } from "react"
import Color from "color"
import gql from "graphql-tag"
import styled from "styled-components"
import { Mutation } from "react-apollo"
import { toast } from "react-toastify"
import { useForm } from "Utils/hooks"
import ErrorMsg from "Common/ErrorMsg"
import {
  venueNameField,
  addressField,
  usernameField,
  emailField,
  websiteField,
  facebookField,
  linkedinField,
  twitterField,
  contactPhoneField,
  imageUrlField,
  amenitiesField,
  costField,
  capacityField,
  descriptionField
} from "Utils/forms"

const ADD_VENUE = gql`
    mutation addVenue(
      $name: name!,
      $address: String!,
      $contactName: name!,
      $contactEmail: name!,
      $contactPhone: String!,
      $website: String!,
      $socialMedia: json!,
      $amenities: json!,
      $cost: String!,
      $capacity: Int!,
      $description: String!,
      $imageUrl: String!
    ) {
      insert_venue (
        objects: [
          {
            name: $name,
            address: $address,
            contactName: $contactName,
            contactEmail: $contactEmail,
            contactPhone: $contactPhone,
            website: $website,
            socialMedia: $socialMedia,
            description: $description,
            amenities: $amenities,
            cost: $cost,
            capacity: $capacity,
            imageUrl: $imageUrl
          }
        ]
      )
    {
      returning {
        name
        address
        contactName
        contactEmail
        contactPhone
        website
        socialMedia
        imageUrl
        amenities
        cost
        capacity
        description
        id
      }
    }
  }
`

export default function VenuesForm() {
  const form = useForm({
    fields: [
      venueNameField,
      addressField,
      usernameField,
      emailField,
      websiteField,
      facebookField,
      linkedinField,
      twitterField,
      contactPhoneField,
      imageUrlField,
      amenitiesField,
      costField,
      capacityField,
      descriptionField
    ]
  })


  const [image, setImage] = useState("")
  const [loading, setLoading] = useState(false)

  const uploadImage = async e => {
    const { files } = e.target
    const data = new FormData()
    data.append("file", files[0])
    data.append("upload_preset", "venues")


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
    <Container data-testid="venues">
      <FormTitle className="bigScreen">Interested in hosting an event?</FormTitle>
      <p style={{ textAlign: "center" }}><small><i>fields marked with an asterisk(*) are required</i></small></p>
      <Form
        data-testid="venues-form"
        method="POST"
        onSubmit={form.onSubmit(handleSubmit)}
        noValidate
      >
        <label htmlFor="venue-name">
          Venue Name*
          <input
            id="venue-name"
            type="text"
            value={form.venueName.value}
            onChange={form.venueName.onChange}
            required
          />
        </label>
        <ErrorMsg data-testid="name-error">
          {form.venueName.error}
        </ErrorMsg>

        <label htmlFor="address">
          Venue Address*
          <input
            id="address"
            type="text"
            value={form.address.value}
            onChange={form.address.onChange}
            required
          />
        </label>
        <ErrorMsg data-testid="address-error">
          {form.address.error}
        </ErrorMsg>

        <label htmlFor="username">
          Contact Name*
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
          Contact Email*
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
          Contact Phone Number
          <input
            id="phone"
            type="phone"
            value={form.contactPhone.value}
            onChange={form.contactPhone.onChange}
          />
        </label>
        <ErrorMsg data-testid="phone-error">
          {form.contactPhone.error}
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

        <label htmlFor="facebook">
          Facebook page
          <input
            id="facebook"
            value={form.facebook.value}
            onChange={form.facebook.onChange}
          />
        </label>
        <ErrorMsg data-testid="facebook-error">
          {form.facebook.error}
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

        <label htmlFor="amenities">
          Amenities
          <p><small><i>Separate each item with a comma
            (ex. free wifi, tables, chairs)</i></small></p>
          <input
            id="amenities"
            value={form.amenities.value}
            onChange={form.amenities.onChange}
          />
        </label>
        <ErrorMsg data-testid="amenities-error">
          {form.amenities.error}
        </ErrorMsg>

        <label htmlFor="cost">
          Venue fee
          <input
            id="cost"
            type="text"
            value={form.cost.value}
            onChange={form.cost.onChange}
          />
        </label>
        <ErrorMsg data-testid="cost-error">
          {form.cost.error}
        </ErrorMsg>

        <label htmlFor="capacity">
          Venue capacity*
          <input
            id="capacity"
            value={form.capacity.value}
            onChange={form.capacity.onChange}
            required
          />
        </label>
        <ErrorMsg data-testid="capacity-error">
          {form.capacity.error}
        </ErrorMsg>

        <label htmlFor="description">
          Description
          <p><small><i>Tell us about your venue (700 characters max)</i></small></p>
          <textarea
            id="description"
            value={form.description.value}
            onChange={form.description.onChange}
            maxLength="700"
          />
        </label>
        <ErrorMsg data-testid="description-error">
          {form.description.error}
        </ErrorMsg>

        <div className="form_line">
          <h4>Upload Photo</h4>
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
        <ErrorMsg data-testid="image-error">
          {form.image.error}
        </ErrorMsg>

        <Mutation mutation={ADD_VENUE}>
          {addVenue => (
            <button type="submit"
            onClick={() => addVenue({
              variables: {
                name: form.venueName.value,
                address: form.address.value,
                contactName: form.username.value,
                contactEmail: form.email.value,
                contactPhone: form.contactPhone.value,
                website: form.website.value,
                amenities: form.amenities.value,
                cost: form.cost.value,
                capacity: form.capacity.value,
                description: form.description.value,
                socialMedia: [form.linkedin.value, form.facebook.value, form.twitter.value],
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

  textarea {
    resize: vertical;
    height: 200px;
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
