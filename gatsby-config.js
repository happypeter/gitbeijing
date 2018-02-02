module.exports = {
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data/`
      }
    },
    'gatsby-transformer-json'
  ]
}
