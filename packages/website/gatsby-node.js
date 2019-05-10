exports.onCreateWebpackConfig = ({ actions, loaders, getConfig }) => {
  const config = getConfig();
  config.node = config.node || {};
  config.node = {
    ...config.node,
    fs: 'empty',
  };
  actions.replaceWebpackConfig(config);
};
