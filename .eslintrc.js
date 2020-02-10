module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
  },
  extends: ['standard'],
  globals: {
    __static: true,
  },
  plugins: ['html'],
  rules: {
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'never',
      },
    ],
    'no-unused-vars': ['warn', {varsIgnorePattern: 'I[A-Z]*'}],
    'no-console': ['warn', {allow: ['info', 'warn', 'error']}],
    'object-curly-spacing': 'off',
    'comma-dangle': ['warn', 'always-multiline'],
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
  },
}
