import React from "react"
import Img from "gatsby-image"
import ExternalLink from "Common/ExternalLink"
import Html from "Common/Html"
import {
  ButtonContainer,
  CardHeader,
  Contacts,
  ContactLinks,
  LogoContainer,
  ProgramCard,
  ToggleDetails,
  SignUpButton,
  Spacer
} from "./styles"

function Program({ logo, program }) {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDetails = () => setIsOpen(!isOpen)

  return (
    <ProgramCard>
      <CardHeader>
        <LogoContainer>
          <Img
          alt={`${program.name} logo`}
          fluid={logo}
          style={{ width: "300px" }}
          />
        </LogoContainer>
        <ButtonContainer>
          {program.signUpForms.map(({ form }) => (
            <ExternalLink key={form.label} href={`https://${form.url}`}>
              <SignUpButton type="button">{form.label}</SignUpButton>
            </ExternalLink>
          ))}
        </ButtonContainer>
        <Spacer />
        <ToggleDetails onClick={toggleDetails}>{isOpen ? "HIDE" : "SEE"} DETAILS</ToggleDetails>
      </CardHeader>
      <div className={`details ${isOpen ? "open" : ""}`}>
        <Html className="program-description">{program.description}</Html>
        <Spacer />
        <Contacts>
          <p>CONTACT:</p>
          <ContactLinks>
            {
              program.pointsOfContact.map(({ contact }) => (
                <span key={contact.name}>
                  <ExternalLink href={`mailto:${contact.email}`}>{contact.name}</ExternalLink>
                </span>
              ))
            }
          </ContactLinks>
        </Contacts>
      </div>
    </ProgramCard>
  )
}

export default Program
