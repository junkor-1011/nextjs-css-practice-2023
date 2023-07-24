const path = require('node:path');
const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    // 'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'next/core-web-vitals',
    'plugin:react/recommended',
    // 'plugin:react-hooks/recommended',
    'prettier',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: [path.join(__dirname, './tsconfig.json')],
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {},
});
