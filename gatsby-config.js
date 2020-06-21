module.exports = {
  siteMetadata: {
    title: `Sonnet Scramble`,
    description: `Can you unscramble all 154 of Shakespeare's sonnets?`,
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
    "gatsby-plugin-emotion",
  ],
}
