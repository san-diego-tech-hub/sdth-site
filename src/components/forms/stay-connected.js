import React from "react"
import addToMailChimp from "gatsby-plugin-mailchimp"
import { useForm } from "Utils/hooks"
import { usernameField, emailField } from "Utils/forms"
import ErrorMsg from "Common/ErrorMsg"
import ExternalLink from "Common/ExternalLink"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SocialMedia from "./social-media"
import {
  Container,
  Form,
  FormField,
  FormTitle,
  SocialContainer
} from "./styles"

function StayConnected() {
  const form = useForm({
    fields: [
      usernameField,
      emailField,
      { name: "comments" }
    ]
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    form.runValidations()

    if (form.hasValidationErrors) {
      return
    }

    const res = await addToMailChimp(form.email.value, {
      NAME: form.username.value,
      COMMENTS: form.comments.value
    })

    console.log(res.msg)
    if (res.result === "success") {
      // TODO: show react toast success
    }
  }

  return (
    <Container data-testid="stay-connected">
      <Form method="post" onSubmit={handleSubmit} noValidate>
        <FormTitle className="bigScreen">Stay Connected</FormTitle>
        <FormField>
          <label htmlFor="username">
              Name:
            <input
              id="username"
              value={form.username.value}
              onChange={form.username.onChange}
            />
          </label>
          <ErrorMsg data-testid="name-error">
            {form.username.error}
          </ErrorMsg>
        </FormField>
        <FormField>
          <label htmlFor="email">
              Email:
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
        </FormField>
        <FormField>
          <label htmlFor="comments">
              Comments:
            <textarea
              id="comments"
              value={form.comments.value}
              onChange={form.comments.onChange}
            />
          </label>
        </FormField>
        <button data-testid="subscribe" type="submit">
            Join the Movement
        </button>
      </Form>
      <SocialContainer>
        <p>
            Want to be a conduit for change? Join the movement and connect with liked-minded
            individuals looking to make a difference redefining the San Diego tech scene.
        </p>

        <ExternalLink href="https://join.slack.com/t/sandiegotechhub/shared_invite/enQtNTI1MDA2NjQyNDcwLTRhYmFhOGZlNzQyZWQ0NmJjMTEzNGE1YjI1NTJmY2RhZjVmYjBjNDAyYmI4MDZkNTM4MzMwM2JmYWQzOGVkYjY">
          <button type="submit">
            <FontAwesomeIcon size="sm" icon={["fab", "slack"]} />
            <span style={{ marginLeft: "1rem" }}>
                Join our Slack <span className="hidden-on-mobile">Community</span>
            </span>
          </button>
        </ExternalLink>
        <SocialMedia />
      </SocialContainer>

      <h2 className="smallScreen">Stay Connected</h2>
    </Container>
  )
}

export default StayConnected
