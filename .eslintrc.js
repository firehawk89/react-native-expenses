// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ['expo', 'prettier'],
  plugins: ['prettier', 'perfectionist'],
  rules: {
    'prettier/prettier': 'error',
    'perfectionist/sort-imports': [
      'error',
      {
        type: 'natural',
        order: 'asc',
      },
    ],
  },
}
