import React from "react"
import addToMailChimp from "gatsby-plugin-mailchimp"
import { useForm } from "Utils/hooks"
import { usernameField, emailField } from "Utils/forms"
import ErrorMsg from "Common/ErrorMsg"
import ExternalLink from "Common/ExternalLink"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { toast } from "react-toastify"
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
      emailField
    ]
  })

  const handleSubmit = async () => {
    const res = await addToMailChimp(form.email.value, {
      NAME: form.username.value
    })

    if (res.result === "success") {
      toast.success(`🚀 ${res.msg}`)
    }

    if (res.result === "error") {
      toast.error(`⚠️ ${res.msg}`)
    }
  }

  return (
    <Container data-testid="stay-connected">
      <Form
        data-testid="stay-connected-form"
        method="post"
        onSubmit={form.onSubmit(handleSubmit)}
        noValidate
      >
        <FormTitle className="bigScreen">Sign up for monthly newsletter</FormTitle>
        <FormField>
          <label htmlFor="username">
            Name:
            <input
              id="username"
              value={form.username.value}
              onChange={form.username.onChange}
            />
          </label>
          <ErrorMsg data-testid="username-error">
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
        <button data-testid="subscribe" type="submit">
          Sign Up
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
            <span className="slack-link">
              Join our Slack <span className="join hidden-on-mobile">Community</span>
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
