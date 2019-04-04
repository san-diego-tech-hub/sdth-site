import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, keywords, title, urlPath = "" }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription = description || data.site.siteMetadata.description
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            script={[
              {
                type: "application/ld+json",
                innerHTML: `{
                  "headline": "San Diego Tech Hub",
                  "@type": "Web${urlPath ? "Page" : "Site"}",
                  "url": "https://www.sandiegotechhub.com${urlPath}",
                  "name": "San Diego Tech Hub Website",
                  "description": "SDTH is San Diego's Tech Community Advocacy Group",
                  "@context": "http://schema.org"
                }`
              }
            ]}
            link={[
              {
                rel: "canonical",
                href: `https://www.sandiegotechhub.com${urlPath}`,
              }
            ]}
            meta={[
              {
                name: "description",
                content: metaDescription,
              },
              {
                property: "og:title",
                content: title,
              },
              {
                property: "og:description",
                content: metaDescription,
              },
              {
                property: "og:type",
                content: "website",
              },
              {
                property: "og:url",
                content: "https://www.SanDiegoTechHub.com",
              },
              {
                property: "og:image",
                content: data.site.siteMetadata.image,
              },
              {
                property: "twitter:image",
                content: data.site.siteMetadata.image,
              },
              {
                name: "twitter:card",
                content: "summary",
              },
              {
                name: "twitter:creator",
                content: data.site.siteMetadata.author,
              },
              {
                name: "twitter:site",
                content: data.site.siteMetadata.twitterHandle,
              },
              {
                name: "twitter:title",
                content: title,
              },
              {
                name: "twitter:description",
                content: metaDescription,
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                    name: "keywords",
                    content: keywords.join(", "),
                  }
                  : []
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: "en",
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
