import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

// import styles from './leadership.module.css'
import { Card, Label, AvatarCard, PillarLeaders, TeamSection } from './styles'
import communityIcon from 'Images/icon_community.svg'
import educationIcon from 'Images/icon_education.svg'
import inclusionIcon from 'Images/icon_inclusion.svg'
import innovationIcon from 'Images/icon_innovation.svg'
import talentIcon from 'Images/icon_talent.svg'
import sdthLogo from 'Images/ciricle-logo.svg'
import { runtimeconfig_v1beta1 } from 'googleapis';

const pillarIcons = {
  community: communityIcon,
  education: educationIcon,
  inclusion: inclusionIcon,
  innovation: innovationIcon,
  talent: talentIcon,
}

export default () => (
  <StaticQuery
    query={query}
    render={({ leadershipJson, ...avatar }) => (
      <main>
        <section style={{display: 'flex', justifyContent: 'center'}}>
          <div style={{maxWidth: '900px'}}>
            <h2>{leadershipJson.firstSectionTitle}</h2>
            <p>{leadershipJson.firstSectionDescription}</p>
          </div>
        </section>
        <TeamSection>
          <span>
            <Card color='#545cff' style={{ width: '50%', margin: 'auto' }}>
              <Label style={{ background: '#343cdf', padding: 0 }}>
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
                  Why San Diego Tech Hub Is Important To Me
                  {/* <p dangerouslySetInnerHTML={{ __html: 'something something' }} /> */}
                  <p>
                    San Diego Tech Hub is an extension of my passion to bring people together for
                    the greater good. I want to see San Diego thrive and opportunities created for
                    those that don't have a voice.
                  </p>
                  <p>
                    "We should never wait for opportunities to come when we can create them for
                    ourselves."
                  </p>
                </div>
              </div>
            </Card>
          </span>
          <PillarLeaders>
            {leadershipJson.leadership.map((leader, i) => {
              const icon = pillarIcons[leader.pillar.text]
              const photo = avatar[leader.photo]

              return (
                <Card color={leader.pillar.background_light} key={i}>
                  <Label style={{ background: leader.pillar.background_dark }}>
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
                        'Why San Diego Tech Hub Is Important To Me'
                      ) : (
                        <div>
                          Please fill out the form below if you're interested in becoming a pillar
                          lead
                        </div>
                      )}
                      <div dangerouslySetInnerHTML={{ __html: leader.bio }} />
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
          text
          background_light
          background_dark
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
