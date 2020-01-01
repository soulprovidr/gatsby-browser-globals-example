exports.onCreateWebpackConfig = ({ actions, plugins }, options) => {
  // Validate options.
  if (!options || !options.globals) return;
  if (typeof options.globals !== 'object') {
    console.warn('Invalid options provided.');
    return;
  }
  // Update webpack config.
  actions.setWebpackConfig({
    plugins: [plugins.provide(options.globals)]
  });
}