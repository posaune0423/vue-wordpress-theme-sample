module.exports = {
  parserOptions: {
    parser: '@babel/eslint-parser',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:vue/recommended',
    'prettier'
  ],
  plugins: ['vue', 'prettier'],
  rules: {
    'arrow-parens': 'off',
    'no-console': 'off',
    'no-irregular-whitespace': 'off',
    'prefer-promise-reject-errors': 'off',
    'require-await': 'off',
    'space-before-function-paren': ['error', 'never'],
    'vue/attribute-hyphenation': 'off',
    'vue/no-side-effects-in-computed-properties': 'off',
    'vue/no-unused-component': 'off',
    'vue/no-v-html': 'off',
    'vue/order-in-components': 'off',
    'vue/require-default-prop': 'off',
    'vue/require-prop-types': 'off',
    'vue/require-v-for-key': 'off',
    'vue/require-valid-default-prop': 'off',
    'vue/return-in-computed-property': 'off',
    'vue/valid-v-for': 'off',
    'vue/prop-name-casing': 'off'
  },
  globals: {
    describe: true,
    test: true,
    expect: true,
    beforeEach: true,
    afterEach: true,
    jest: true
  }
};
