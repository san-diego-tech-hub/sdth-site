import React from "react"
import styled from "styled-components"
import ExternalLink from "Common/ExternalLink"
import { Label } from "Common/Label"

export default function LocationCard({
  amenities,
  capacity,
  cost,
  description,
  imageUrl,
  name,
  rating,
  ratingCount,
  sourceUrl
}) {
  return (
    <Container>
      <ImageColumn>
        <img alt={name} src={imageUrl} />
      </ImageColumn>

      <ContentColumn>
        <h2>{name}</h2>
        <div>
          Capacity: {capacity}
          <br />
          {rating} Stars ({ratingCount})
        </div>

        <Description>{description}</Description>

        <div>Amenities:</div>
        <AmenitiesList>
          {amenities.map(amenity => (
            <li key={amenity}>
              <Label>{amenity}</Label>
            </li>
          ))}
        </AmenitiesList>
      </ContentColumn>

      <ActionColumn>
        <Cost>
          {cost ? `$${cost}` : "FREE"}
        </Cost>
        <ExternalLink aria-label={name} color="#248ABA" href={sourceUrl}>
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

const Cost = styled(Label)`
  background-color: #2ecd7a;
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
