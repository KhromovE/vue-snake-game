module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/recommended', '@vue/prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      { trailingComma: 'all', singleQuote: true, semi: false },
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    semi: [2, 'never'],
    'vue/jsx-uses-vars': 2,
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaFeatures: {
      jsx: true,
    },
  },
}
