/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  // Add common site data (not required by the theme, but recommended)
  siteMetadata: {
    title: "Wyatt Olney & The Wreckage",
    description: "Seattle WA",
    siteUrl: "https://www.woatw.com"
  },
  plugins: [
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-68343119-6`,
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true,
      },
    },
    // Add gatsby-theme-musician to your site
    {
      resolve: "gatsby-theme-musician",
      // More info about the theme options:
      // https://github.com/ekafyi/gatsby-theme-musician/blob/master/docs/usage.md#theme-options
      options: {
        // These are default values that you can override
        // basePath: `/`,
        // content: `content`,
        // pwaName: null
      }
    }
  ]
};
