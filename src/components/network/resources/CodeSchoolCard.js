import React from "react"
import styled from "styled-components"
import ExternalLink from "Common/ExternalLink"

export default function CodeSchoolCard({
  address,
  description,
  email,
  linkedin,
  facebook,
  name,
  phoneNumber,
  imageUrl,
  website
}) {
  return (
    <Container>
      <ImageColumn>
        <img alt={name} src={imageUrl} />
      </ImageColumn>

      <ContentColumn>
        <h2>{name}</h2>
        <p>{address}</p>

        <Description>{description}</Description>

        {(linkedin || facebook) && (
          <div>Social Media:</div>
        )}
        <AmenitiesList>
          {linkedin
            && (
            <li key={linkedin}>
              <ExternalLink href={linkedin}>LinkedIn</ExternalLink>
            </li>
            )
          }
          {facebook
            && (
            <li key={facebook}>
              <ExternalLink href={facebook}>Facebook</ExternalLink>
            </li>
            )
          }
        </AmenitiesList>
      </ContentColumn>

      <ActionColumn>
        <p>{phoneNumber}</p>
        <p>{email}</p>
        <ExternalLink aria-label={name} color="#248ABA" href={website}>
          View details
        </ExternalLink>
      </ActionColumn>
    </Container>
  )
}

const ImageColumn = styled.div`
  align-items: flex-start;
  display: flex;
  flex: 0.25;

  img {
    width: 95%;
  }
`

const ContentColumn = styled.div`
  flex: 1;
`

const ActionColumn = styled.div`
  align-items: flex-end;
  display: flex;
  flex: 0.25;
  flex-direction: column;
  justify-content: center;
`

const AmenitiesList = styled.ul`
  list-style: none;

  li {
    display: inline-block;
  }
`

const Description = styled.div`
  margin: 20px 0;
`

const Container = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 6rem 2rem;
  width: 100%;

  > div {
    padding: 0.4rem;
  }

  @media (max-width: 990px) {
    width: 100vw;
  }

  @media(max-width: 768px) {
    padding: 2rem 3rem 2rem;
    flex-direction: column;
  }

  @media(max-width: 600px) {
    margin: 1rem 0;
  }
`
