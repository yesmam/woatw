/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx } from 'theme-ui'

import useSiteMetadata from './use-site-metadata'
import LandingSectionTitle from './landing-section-title'
import ShowItem from './show-item'

const ShowsV2 = ({ shows = [], locale = 'en-US' }) => {
  const { textLabels } = useSiteMetadata()
  const sectionTitle = textLabels.section_shows_title || 'Tour Dates'

  return (
    <section
      id='tour-dates'
      sx={{ variant: 'layout.landingSection', paddingTop: 0 }}
    >
      <LandingSectionTitle>{sectionTitle}</LandingSectionTitle>
      <ol
        sx={{
          m: 0,
          p: 0,
          listStyle: 'none'
        }}
      >
        {shows.length > 0 &&
          shows.map(node => {
            return <ShowItem {...node} key={node.id} locale={locale} />
          })}
      </ol>
      <div id='special-announcement' className='text-justified'>
        <p>
          We want to encourage all of you to be healthy and stay safe. As you
          may already know, Washington state is joining other states across the
          nation in{' '}
          <a
            href='https://q13fox.com/2020/03/15/restaurants-bars-entertainment-to-close-statewide-immediately-in-king-county/'
            target='__blank'
          >
            temporarily shutting down restaurants, bars, and entertainment
            venues
          </a>{' '}
          in an effort to combat the COVID-19 (coronavirus) concerns that are
          taking the world by storm.
        </p>
        <div className='text-centered'>
          <h3>We look forward to entertaining you soon.</h3>
        </div>
      </div>
    </section>
  )
}

export default ShowsV2
