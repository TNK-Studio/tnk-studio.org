module.exports = {
  siteMetadata: {
    title: `TNK Studio`,
    description: ``,
    author: `@tnk-studio`,
  },
  plugins: [
    {
      resolve: `gatsby-source-notion-database`,
      options: {
        sourceConfig: [
          {
            name: 'members',
            table: 'https://www.notion.so/d204c702f6fa414a95eb0bc312f3e3b0?v=750a2f63558d4b18bd9e2f3ea7741afe',
            cacheType: 'static'
          },
          {
            name: 'tools',
            table: 'https://www.notion.so/9168dcfae89b44418692cec411690928?v=95bb880b8ed449b18576c96c8c6f676e',
            cacheType: 'static'
          },
          {
            name: 'projects',
            table: 'https://www.notion.so/8f954f7cc5154a5eaa48d9c3e7703cd7?v=0716e50e28064d36896e5cb52886bee5',
            cacheType: 'static'
          }
        ]
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-notion`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
