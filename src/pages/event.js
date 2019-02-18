import React from 'react';
import styled from 'styled-components'
import moment from 'moment'

import Layout from '../components/layout'

export default function EventPage({ pageContext: { event }, ...props }) {
  if (event == null) {
    return null
  }
  const start = moment(event.start)
  const end = moment(event.end)
  return (
    <Layout pageProps={props}>
      <Container>
        <MainSection>
          <Header>
            <Title>
              {event.title}
            </Title>
            <DateTime>
              {`${start.format('MMM Do @ h:mmA')} - ${end.format('h:mmA')}`}
            </DateTime>
          </Header>

          <Description
            dangerouslySetInnerHTML={{__html: event.description }}
          />
        </MainSection>
        <SideBar>
          <SubHeading>Details</SubHeading>
          <Field>Date:</Field>
          <Value>{start.format('MMMM Do')}</Value>

          <Field>Time:</Field>
          <Value>{`${start.format('h:mmA')} - ${end.format('h:mmA')}`}</Value>

          <Field>Website:</Field>
          <Value>
            <a
              href={event.url}
              rel='noopener noreferrer'
              target='_blank'
            >
              {event.url}
            </a>
          </Value>

          <SubHeading>Venue</SubHeading>
          <Value>{event.venue.name}</Value>
          <Value>{event.venue.address}</Value>

        </SideBar>
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
`

const DateTime = styled.span`
  font-size: 2rem;
  align-text: left;
`

const Description = styled.div`
  font-size: 2rem;
  margin-bottom: 3rem;
  max-width: 800px;
  padding: 10px;
  text-align: left;
`

const Field = styled.div`
  color: #555;
  font-size: 1.5rem;
  font-weight: bolder;
  margin-bottom: 0.5rem;
  margin-left: 5px;
`

const Value = styled.div`
  color: #222;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  margin-left: 5px;
  a {
    color: ${props => props.theme.mainPurple};
    text-decoration: none;
  }
`

const Header = styled.div`
  background: rgba(76,78,122, 0.8);
  color: white;
  margin: 3rem 0;
  max-width: 900px;
  padding: 2rem;
`

const MainSection = styled.div``

const SideBar = styled.div`
  background: #f5f5f5;
  box-shadow: 1px 1px 5px rgba(0,0,0,0.1);
  max-width: 300px;
  margin-top: 3rem;
  margin-left: 2rem;
  padding: 10px 15px;
  text-align: left;
  width: 300px;
  @media(max-width: 667px) {
    display: none;
  }
`

const SubHeading = styled.h3`
  background: rgba(76,78,122, 0.8); 
  color: white;
  font-size: 1.7rem;
  padding: 8px;
  text-align: left;
`

const Title = styled.h3`
  font-size: 3rem;
`
