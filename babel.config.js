module.exports = function (api) {
  const isProd = api.env('production');
  return {
    presets: ['@react-native/babel-preset'],
    plugins: isProd ? [['transform-remove-console', { exclude: ['error', 'warn'] }]] : [],
  };
};