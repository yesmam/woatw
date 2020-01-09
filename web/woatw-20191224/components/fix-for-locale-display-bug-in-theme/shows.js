/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react"
import { jsx } from "theme-ui"

import useSiteMetadata from "../use-site-metadata"
import LandingSectionTitle from "./landing-section-title"
import ShowItem from "./show-item"

const ShowsV2 = ({ shows = [], locale = "en-US" }) => {
  const { textLabels } = useSiteMetadata()
  const sectionTitle = textLabels.section_shows_title || "Tour Dates"

  return (
    <section id="tour-dates" sx={{ variant: "layout.landingSection" }}>
      <LandingSectionTitle>{sectionTitle}</LandingSectionTitle>
      <ol
        sx={{
          m: 0,
          p: 0,
          listStyle: "none",
        }}
      >
        {shows.length > 0 &&
          shows.map(node => {
            return <ShowItem {...node} key={node.id} locale={locale} />
          })}
      </ol>
    </section>
  )
}

export default ShowsV2
