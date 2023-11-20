module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'plugin:@typescript-eslint/recommended',
    "plugin:react/recommended",
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    "plugin:valtio/recommended",
    'prettier'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    //RS custom rules
    'eqeqeq': ['error', 'smart'],
    '@typescript-eslint/no-unused-vars': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/no-unknown-property': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
