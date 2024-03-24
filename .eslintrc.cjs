module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'airbnb-base',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'vue',
    'import',
  ],
  rules: {
    'brace-style': [2, 'stroustrup', { allowSingleLine: true }],
    'vue/max-attributes-per-line': 0,
    'vue/valid-v-for': 0,

    'generator-star-spacing': 'off',

    'arrow-parens': 0,
    'one-var': 0,
    'max-len': 0,
    'import/first': 0,
    'import/named': 2,
    'import/namespace': 2,
    'import/default': 2,
    'import/export': 2,
    'import/extensions': 0,
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'linebreak-style': ['error', 'unix'],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
  },
};
