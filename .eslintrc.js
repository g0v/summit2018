// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  env: {
    browser: true,
    jest: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: [
    'standard',
    'prettier',
    'plugin:jest/recommended',
    'plugin:vue/recommended', // or 'plugin:vue/base'
  ],
  plugins: ['prettier', 'vue', 'jest'],
  // add your custom rules here
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,

    'comma-dangle': ['warn', 'only-multiline'],
    'no-var': 'warn',

    'prettier/prettier': [
      'warn',
      {
        trailingComma: 'es5',
        singleQuote: true,
        semi: false,
      },
    ],

    'vue/max-attributes-per-line': [
      'warn',
      {
        singleline: 5,
        multiline: {
          max: 3,
          allowFirstLine: true,
        },
      },
    ],
  },
}
