import React, { useState } from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ExternalLink from "Common/ExternalLink"
import { Label } from "Common/Label"
import ReadMoreReact from "read-more-react"
import { urlToSocialIcon } from "./util"

export default function LocationCard({
  address,
  amenities,
  capacity,
  contactEmail,
  contactName,
  cost,
  description,
  imageUrl,
  name,
  socialMedia,
  website
}) {
  const [display, setDisplay] = useState(4)

  return (
    <Container>
      <ImageColumn>
        <img alt={name} src={imageUrl} />
      </ImageColumn>

      <ContentColumn>
        <h2>{name}</h2>
        <div>
          Capacity: {capacity}
        </div>

        <Description>{address}</Description>

        <Description>
          <ReadMoreReact text={description} min={200} ideal={350} max={700} readMoreText="Read more" />
        </Description>

        <List>
          {amenities.length > 0
            ? amenities.split(",").slice(0, display).map(amenity => (
              <li key={amenity}>
                <Label>{amenity}</Label>
              </li>
            )) : null}
          {
            amenities.split(",").length > 4
              ? [(amenities.length !== display
                ? (
                  <Button key={display}
                  value={display}
                  onClick={() => setDisplay(amenities.length)}
                  >more</Button>
                )
                :  (
                  <Button key={display}
                  value={display}
                  onClick={() => setDisplay(4)}
                  >less</Button>
                )
              )]
              : null
          }
        </List>

        <List>
          {
            socialMedia.map((url) => {
              const icon = urlToSocialIcon(url)
              if (!icon) return ""

              return (
                <li key={icon}>
                  <ExternalLink href={url}>
                    <FontAwesomeIcon size="2x" icon={["fab", icon]} color="#0077B5" />
                  </ExternalLink>
                </li>
              )
            })
          }
        </List>
      </ContentColumn>

      <ActionColumn>
        <Cost>
          {cost ? `$${cost}` : "FREE"}
        </Cost>
        <p>{contactName}</p>
        <ExternalLink href={`mailto:${contactEmail}`}>{contactEmail}</ExternalLink>
        <ExternalLink aria-label={name} color="#248ABA" href={website}>
          Company Website
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

const List = styled.ul`
  list-style: none;
  margin-left: 0;

  li {
    display: inline-block;
    margin-right: 15px;
  }
`

const Cost = styled(Label)`
  background-color: #2ecd7a;
`

const Button = styled.span`
  color: ${props => props.color || props.theme.primaryDark};
  text-decoration: none;
  
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

const Description = styled.div`
  margin: 20px 0;

  .read-more-button {
    color: ${props => props.theme.primaryDark};
    cursor: pointer;
    margin-top: 10px;
    width: 100px;
  }
`

const Container = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 4rem 2rem;
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
