module.exports = {
  plugins: [
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/`,
        name: 'src-files',
      },
    },
    {
      resolve: 'gatsby-transformer-code',
      options: {
        name: 'src-files',
        extensions: ['md'],
      },
    },
  ],
};
