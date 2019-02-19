import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Color from 'color'

// import styles from './leadership.module.css'
import {
  AvatarCard,
  Blurb,
  Card,
  Label,
  Header,
  PillarLeaders,
  TeamSection,
  Why
} from './styles'
import communityIcon from 'Images/icon_community.svg'
import educationIcon from 'Images/icon_education.svg'
import inclusionIcon from 'Images/icon_inclusion.svg'
import innovationIcon from 'Images/icon_innovation.svg'
import talentIcon from 'Images/icon_talent.svg'
import sdthLogo from 'Images/ciricle-logo.svg'

const pillarIcons = {
  community: communityIcon,
  education: educationIcon,
  inclusion: inclusionIcon,
  innovation: innovationIcon,
  talent: talentIcon,
}

const FOUNDER_COLOR = Color('#545CFE').desaturate(0.2)

export default () => (
  <StaticQuery
    query={query}
    render={({ leadershipJson, ...avatar }) => (
      <main>
        <Header style={{display: 'flex', justifyContent: 'center', marginBottom: '2rem'}}>
          <div style={{maxWidth: '900px'}}>
            <h2>{leadershipJson.firstSectionTitle}</h2>
            <p>{leadershipJson.firstSectionDescription}</p>
          </div>
        </Header>
        <TeamSection>
          <span>
            <Card color={FOUNDER_COLOR.toString()} style={{ width: '50%', margin: 'auto' }}>
              <Label style={{ background: FOUNDER_COLOR.darken(0.15).toString(), padding: 0 }}>
                <Link
                  to={`/about`}
                  style={{
                    alignItems: 'center',
                    color: 'white',
                    display: 'flex',
                    padding: '1.3rem',
                    textDecoration: 'none'
                  }}
                >
                  <img style={{margin: 0, marginRight: '1rem'}} height='30px' src={sdthLogo} alt='SDTH' />
                  Founder
                </Link>
              </Label>
              <AvatarCard style={{ marginTop: '1rem' }}>
                <Img fluid={avatar.claude.childImageSharp.fluid} alt="Claude Jones" />
              </AvatarCard>

              <div className="card-header">
                <div style={{ fontWeight: '700' }}>Claude Jones</div>
                <div style={{ fontSize: '2rem' }}>claude@sandiegotechhub.com</div>

                <div className="card-text">
                  <Why color={FOUNDER_COLOR.darken(0.1).toString()}>
                    Why San Diego Tech Hub Is Important To Me
                  </Why>
                  {/* <p dangerouslySetInnerHTML={{ __html: 'something something' }} /> */}
                  <Blurb>
                    <p>
                      San Diego Tech Hub is an extension of my passion to bring people together for
                      the greater good. I want to see San Diego thrive and opportunities created for
                      those that don't have a voice.
                    </p>
                    <p>
                      "We should never wait for opportunities to come when we can create them for
                      ourselves."
                    </p>
                  </Blurb>
                </div>
              </div>
            </Card>
          </span>
          <PillarLeaders>
            {leadershipJson.leadership.map((leader, i) => {
              const icon = pillarIcons[leader.pillar.text]
              const photo = avatar[leader.photo]
              const baseColor = Color(leader.pillar.color).desaturate(0.2)

              return (
                <Card color={baseColor.toString()} key={i}>
                  <Label style={{ background: baseColor.darken(0.2).toString() }}>
                    <Link
                      to={`/${leader.pillar.text}`}
                      style={{ color: 'white', textDecoration: 'none', padding: '.3rem' }}
                    >
                      <img src={icon} width="30" alt={leader.pillar.text} />
                      {leader.pillar.text}
                    </Link>
                  </Label>

                  <AvatarCard>
                    <Img
                      fluid={photo.childImageSharp.fluid}
                      alt={leader.name}
                      style={{ borderRadius: '100%' }}
                    />
                  </AvatarCard>

                  <div className="card-header">
                    <div style={{ fontWeight: '700' }}>{leader.name}</div>
                    <div style={{ fontSize: '2rem' }}>{leader.email}</div>

                    <div className="card-text">
                      {leader.bio ? (
                        <Why color={baseColor.darken(0.2).toString()}>
                          Why San Diego Tech Hub Is Important To Me
                        </Why>
                      ) : (
                        <div>
                          Please fill out the form below if you're interested in becoming a pillar
                          lead
                        </div>
                      )}
                      <Blurb dangerouslySetInnerHTML={{ __html: leader.bio }} />
                    </div>
                  </div>
                </Card>
              )
            })}
          </PillarLeaders>
        </TeamSection>
      </main>
    )}
  />
)

const query = graphql`
  query LeadershipQuery {
    leadershipJson {
      firstSectionTitle
      firstSectionDescription
      leadership {
        name
        email
        pillar {
          color
          text
        }
        bio
        photo
      }
    }

    avatar: file(relativePath: { eq: "avatar.png" }) {
      ...childSharp
    }
    jared: file(relativePath: { eq: "jared.jpg" }) {
      ...childSharp
    }
    fred_2: file(relativePath: { eq: "fred_2.jpg" }) {
      ...childSharp
    }
    aaron_gasperi: file(relativePath: { eq: "aaron_gasperi.jpg" }) {
      ...childSharp
    }
    roberts_michael_2: file(relativePath: { eq: "roberts_michael_2.jpg" }) {
      ...childSharp
    }
    christie: file(relativePath: { eq: "christie.jpg" }) {
      ...childSharp
    }
    anh_2: file(relativePath: { eq: "anh_2.jpg" }) {
      ...childSharp
    }
    yashar: file(relativePath: { eq: "yashar.jpg" }) {
      ...childSharp
    }
    kristin: file(relativePath: { eq: "kristin.jpg" }) {
      ...childSharp
    }
    nick: file(relativePath: { eq: "nick.jpg" }) {
      ...childSharp
    }
    connie: file(relativePath: { eq: "connie.jpg" }) {
      ...childSharp
    }
    jon: file(relativePath: { eq: "jon.jpg" }) {
      ...childSharp
    }
    claude: file(relativePath: { eq: "claude_2_cropped.png" }) {
      ...childSharp
    }

    blank: file(relativePath: { eq: "blank.png" }) {
      ...childSharp
    }
  }
`
