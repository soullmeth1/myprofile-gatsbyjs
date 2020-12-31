const env = require('dotenv');
env.config({ path: '.env' });

module.exports = {
  siteMetadata: {
    title: 'myResume Gatsby.js',
    description: 'Build my resume with static site generator Gatsby.js',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'wcema53n',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
