module.exports = {
  siteMetadata: {
    title: `Sonnet Scramble`,
  },
  plugins: [
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/sonnets`,
      },
    },
  ],
}
