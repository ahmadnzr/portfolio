const { resolve } = require('node:path');

const project = resolve(__dirname, 'tsconfig.json');

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    require.resolve('@vercel/style-guide/eslint/node'),
    require.resolve('@vercel/style-guide/eslint/browser'),
    require.resolve('@vercel/style-guide/eslint/react'),
    require.resolve('@vercel/style-guide/eslint/next'),
    require.resolve('@vercel/style-guide/eslint/typescript'),
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
    'jsx-a11y': {
      components: {
        Article: 'article',
        Button: 'button',
        Image: 'img',
        Input: 'input',
        Link: 'a',
        Video: 'video',
      },
    },
  },
  plugins: ['@typescript-eslint', 'react', '@tanstack/query'],
  ignorePatterns: ['node_modules/', 'dist/', '.next/'],
  rules: {
    'no-useless-escape': 'off',
    'prefer-named-capture-group': 'off',
    'import/no-default-export': 'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        warnOnUnassignedImports: true,
      },
    ],
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/non-nullable-type-assertion-style': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-useless-template-literals': 'off',
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/no-dynamic-delete': 'off',
    'react/jsx-sort-props': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: ['arrow-function', 'function-declaration'],
      },
    ],
    '@next/next/no-html-link-for-pages': 'off',
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          pascalCase: true,
          camelCase: true,
        },
        ignore: ['next-env.d.ts', 'not-found.tsx'],
      },
    ],
  },
};
