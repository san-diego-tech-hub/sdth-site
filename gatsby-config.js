const path = '.env' + (process.env.NODE_ENV === 'development' ? '.dev' : '')

if (process.env.NODE_EN !== 'production') {
  require('dotenv').config({ path }) // only run this in prod if we're doing the FTP deployement, not for now/netlify deployment.
}

module.exports = {
  siteMetadata: {
    title: 'San Diego Tech Hub',
    description:
      'San Diego Tech Hub represents a movement aimed at changing the perception of the San Diego tech ecosystem. Our focus is to be a conduit for change connecting businesses, organizations, and individuals, leveraging their resources and talents to build a stronger San Diego tech community through collaboration.',
    author: `Claude Jones`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `San Diego Tech Hub`,
        short_name: `SD Tech Hub`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: './src/images/ciricle-logo.png',
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ['roboto'],
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          process.env.MAILCHIMP
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA,
      },
    },
    `gatsby-plugin-remove-serviceworker`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-meetup`,
      options: {
        key: process.env.MEETUP_API_KEY,
        groupUrlName: 'sandiegojs',
        status: 'upcoming,past',
        desc: 'true',
        page: 200,
      },
    },
    {
      resolve: `gatsby-source-eventbrite`,
      options: {
        organizationId: process.env.EVENTBRITE_ORG_ID,
        accessToken: process.env.EVENTBRITE_OAUTH_TOKEN,
        entities: ['events'],
      },
    },
  ],
}
