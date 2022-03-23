const babel = require('@rollup/plugin-babel').default;
const getBabelOutputPlugin =
  require('@rollup/plugin-babel').getBabelOutputPlugin;
const {nodeResolve} = require('@rollup/plugin-node-resolve');
const typescript = require('@rollup/plugin-typescript');
const image = require('@rollup/plugin-image');

module.exports = {
  rollup(config, _options) {
    config.plugins.push(
      getBabelOutputPlugin({
        allowAllFormats: true,
        presets: [['babel-preset-expo', {modules: false}]],
        plugins: [['@babel/plugin-transform-runtime', {useESModules: true}]],
      }),
      nodeResolve(),
      typescript({noEmitOnError: !process.env.ROLLUP_WATCH}),
      image(),
    );
    return config;
  },
};
