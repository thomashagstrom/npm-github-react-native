module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    comments: false,
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
  };
};
