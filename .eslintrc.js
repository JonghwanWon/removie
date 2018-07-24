const path = require('path');

module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  plugins: ['react', 'jsx-a11y', 'import'],
  rules: {
    'react/jsx-filename-extension': 0,
    'no-nested-ternary': 0,
    'no-console': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: [path.resolve(__dirname, './src')],
      },
    },
  },
  env: {
    browser: true,
    jasmine: true,
  },
};
