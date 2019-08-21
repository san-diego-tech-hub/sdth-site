import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ExternalLink from "Common/ExternalLink"
import ReadMoreReact from "read-more-react"
import { urlToSocialIcon } from "./util"

export default function JobCandidateCard({
  name,
  imageUrl,
  description,
  website,
  socialMedia,
  email,
  phoneNumber
}) {
  return (
    <Container>
      <ImageColumn>
        <img alt={name} src={imageUrl} />
      </ImageColumn>

      <ContentColumn>
        <h2>{name}</h2>

        <Description>
          <ReadMoreReact text={description} min={200} ideal={350} max={700} readMoreText="read more" />
        </Description>

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
        <p>{phoneNumber}</p>
        <p>{email}</p>
        <ExternalLink aria-label={name} color="#248ABA" href={website}>
          Portfolio
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

const Description = styled.div`
  margin: 20px 0;
  width: 99%;

  .read-more-button {
    display: inline-block;
    color: ${props => props.theme.primaryDark};
    cursor: pointer;
    width: 110px;
    margin-left: 5px;
  }

  .read-more-button:active {
    background-color: ${props => props.theme.primaryWhite};
  }
`

// .read-more-button {
//   color: white;
//   cursor: pointer;
//   width: 110px;
//   margin-top: 20px;
//   background-color: ${props => props.theme.primaryDark};
//   box-shadow: 0 0 5px -1px rgba(0,0,0,0.2);
//   cursor: pointer;
//   vertical-align: middle;
//   padding: 3px;
//   text-align: center; 
// }
