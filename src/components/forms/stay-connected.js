import React from "react"
import addToMailChimp from "gatsby-plugin-mailchimp"

import ExternalLink from "Common/ExternalLink"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SocialMedia from "./social-media"
import { Container, Form, FormTitle, SocialContainer } from "./styles"

class StayConnected extends React.Component {
  state = {
    name: "",
    email: "",
    comments: "",
  }

  handleChange = ({ target }) => this.setState({ [target.id]: target.value })

  handleSubmit = async e => {
    e.preventDefault()
    const { name, email, comments } = this.state

    if (email.length < 1 || name.length < 1) {
      alert("Please provide a valid name and email.")
      return
    }
    const res = await addToMailChimp(email, { NAME: name, COMMENTS: comments })

    alert(res.msg)
    if (res.result === "success") {
      this.setState({ name: "", email: "", comments: "" })
    }
  }

  render() {
    const { name, email, comments } = this.state

    return (
      <Container data-testid="stay-connected">
        <Form method="post" onSubmit={this.handleSubmit}>
          <FormTitle className="bigScreen">Stay Connected</FormTitle>
          <div>
            <label htmlFor="name">
              Name:
              <input id="name" value={name} onChange={this.handleChange} />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              Email:
              <input
                id="email"
                type="email"
                value={email}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <label htmlFor="comments">
              Comments:
              <textarea id="comments" value={comments} onChange={this.handleChange} />
            </label>
          </div>
          <button type="submit">Join the Movement</button>
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
                Join our Slack <span className="join">Community</span>
              </span>
            </button>
          </ExternalLink>
          <SocialMedia />
        </SocialContainer>

        <h2 className="smallScreen">Stay Connected</h2>
      </Container>
    )
  }
}

export default StayConnected
