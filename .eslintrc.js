module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/no-v-for-template-key-on-child': 'off',
    'vue/no-v-text-v-html-on-component': 'off',
    'vue/this-in-template': 'off',
    'vue/v-slot-style': 'off',
    'vue/no-lone-template': 'off',
  },
}
