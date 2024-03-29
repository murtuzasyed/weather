module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    commonjs: true,
    node: true,
    jest: true
  },
  settings: {
    react: {
      version: '16.11.0'
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react', 'jsx-a11y']
};
