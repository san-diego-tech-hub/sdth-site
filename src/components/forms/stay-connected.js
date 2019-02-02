import React from 'react'
import addToMailChimp from 'gatsby-plugin-mailchimp'

import { Container, Form, SocialContainer } from './styles'
// import styles from './form.module.css'
import SocialMedia from './social-media'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class StayConnected extends React.Component {
  state = {
    name: '',
    email: '',
    comments: '',
  }

  handleChange = ({ target }) => this.setState({ [target.name]: target.value })

  handleSubmit = async e => {
    e.preventDefault()
    const { name, email, comments } = this.state

    if (email.length < 1 || name.length < 1) {
      alert('Please provide a valid name and email.')
      return
    }
    const res = await addToMailChimp(email, { NAME: name, COMMENTS: comments })

    alert(res.msg)
    if (res.result === 'success') {
      this.setState({ name: '', email: '', comments: '' })
    }
  }

  render() {
    const { name, email, comments } = this.state

    return (
      <Container>
        <Form method="post" onSubmit={this.handleSubmit}>
          <h2 className='bigScreen'>Stay Connected</h2>
          <div>
            <label htmlFor="name">Name:</label>
            <input name="name" id="name" value={name} onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="comments">Comments:</label>
            <textarea id="comments" name="comments" value={comments} onChange={this.handleChange} />
          </div>
          <button>Join the Movement</button>
        </Form>
        <SocialContainer>
          <p>
            Want to be a conduit for change? Join the movement and connect with liked-minded
            individuals looking to make a different towards redefining the San Diego tech scene.
          </p>

          <a
            target="_blank"
            href="https://join.slack.com/t/sandiegotechhub/shared_invite/enQtNTI1MDA2NjQyNDcwLTRhYmFhOGZlNzQyZWQ0NmJjMTEzNGE1YjI1NTJmY2RhZjVmYjBjNDAyYmI4MDZkNTM4MzMwM2JmYWQzOGVkYjY"
            rel="noopener noreferrer"
          >
            <button>
              <FontAwesomeIcon size="sm" icon={['fab', 'slack']} />
              <span style={{ marginLeft: '1rem' }}>Join our Slack Community</span>
            </button>
          </a>
          <SocialMedia />
        </SocialContainer>

        <h2 className='smallScreen'>Stay Connected</h2>
      </Container>
    )
  }
}

export default StayConnected
