import React from 'react';

import Layout from '../components/layout'
export default function EventPage({ pageContext: { event }, ...props }) {
  return (
    <Layout pageProps={props}>
      <h2>{event.summary}</h2>

      <div 
        dangerouslySetInnerHTML={{__html: event.description }}
      />
    </Layout>
  )
}

