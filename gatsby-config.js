require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Ivie A.`,
    description: `TBD`,
    author: `Ivie A.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        host: process.env.CONTENTFUL_HOST,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: process.env.NODE_ENV === "development",
      },
    },
    {
      resolve: `gatsby-plugin-snipcart-custom`,
      options: {
        apiKey: process.env.SNIPCART_API_KEY,
        currency: "eur",
      },
    },
    // {
    //       resolve: `gatsby-plugin-manifest`,
    //       options: {
    //         name: `gatsby-starter-default`,
    //         short_name: `starter`,
    //         start_url: `/`,
    //         background_color: `#663399`,
    //         theme_color: `#663399`,
    //         display: `minimal-ui`,
    //         icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //       },
    //     },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
