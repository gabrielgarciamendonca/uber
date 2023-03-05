module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module:react-native-dotenv',
      {
        envName: 'GOOGLE_API',
        moduleName: '@env',
        path: '.env',
        safe: false,
        allowUndefined: true,
        verbose: false
      }],
    'react-native-reanimated/plugin'
  ],
};
