module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@api': './src/api',
          '@modules': './src/modules',
          '@components': './src/components',
          '@screens': './src/screens',
          '@navigator': './src/navigator',
          '@theme': './src/theme',
          '@macos-config': './macos.config.js',
        },
      },
    ],
  ],
};
