module.exports = {
  siteMetadata: {
    title: 'Paul Barnes | Web Developer',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-json',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-javascript-static-exports',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        precision: 8
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data`
      }
    }
  ],
}
