module.exports = {
  root: true,
  env: {
    node: true,
    mocha: true,
  },
  plugins: [
    'mocha',
  ],
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
  ],
  rules: {
    'max-len': [2, 120, 2, {}],
    'no-param-reassign': ['error', { props: false }],
    "linebreak-style": 0
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  overrides: [
    {
      files: ['*.spec.js'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'no-unused-expressions': 'off',
        'mocha/no-skipped-tests': 'error',
        'mocha/no-exclusive-tests': 'error',
      },
    },
  ],
};