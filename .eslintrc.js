const [OFF, , ERROR] = [0, 1, 2];

export default {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'prettier',
  ],
  root: true,
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
      },
    },
  },
  rules: {
    'no-var': ERROR,
    'no-console': ERROR,
    'prefer-const': ERROR,
    indent: [ERROR, 2],
    'no-multi-spaces': ERROR,
    'no-multiple-empty-lines': ERROR,
    'no-use-before-define': ERROR,
    'comma-dangle': [ERROR, 'always-multiline'],
    '@typescript-eslint/no-unused-vars': ERROR,
    '@typescript-eslint/no-shadow': ERROR,
    'import/extensions': [
      OFF,
      {
        ts: 'never',
        js: 'never',
        mjs: 'never',
      },
    ],
    'prettier/prettier': [
      OFF,
      {
        trailingComma: 'all',
        tabWidth: 2,
        semi: true,
        singleQuote: true,
      },
    ],
  },
};
