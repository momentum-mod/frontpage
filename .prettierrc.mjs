/** @type {import("prettier").Config} */
export default {
  printWidth: 80,
  trailingComma: 'none',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  arrowParens: 'always',
  endOfLine: 'lf',
  bracketSpacing: true,
  proseWrap: 'always',
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    },
    {
      files: '*.json',
      options: {
        singleQuote: false
      }
    }
  ]
};
