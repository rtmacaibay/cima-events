/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
	path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Cima Events`,
    menuLinks:[
      {
        name: 'home',
        link: '/'
      },
      {
        name: 'page2',
        link: '/page-2'
      },
      {
        name: '404',
        link: '/404'
      }, 
      {
        name: 'usingSSR',
        link: '/using-ssr'
      }
    ],
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
		{
      resolve: `gatsby-source-mysql`,
      options: {
				connectionDetails: {
					host: `${process.env.DB_HOST}`,
					user: `${process.env.DB_USER}`,
					password: `${process.env.DB_PASS}`,
					database: `${process.env.DB_NAME}`
				},
				queries: [
          {
            statement: 'SELECT * FROM events',
            idFieldName: 'Code',
            name: 'events'
          }
        ]
			}
    },
  ],
}
