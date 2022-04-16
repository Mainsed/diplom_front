module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'semi': ['warn', 'always'],
    'quotes': ['warn', 'single'],
    'react/prop-types': 0,
    'max-len': ['warn', { 'code': 120 }],
    'arrow-parens': 'off',
    'radix': 'off',
    'no-unused-expression': 'off',
    'operator-linebreak': 'off',
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 'off',
    'object-curly-newline': 'off',
    'implicit-arrow-linebreak': 'off',
    'function-paren-newline': 'off',
    'max-classes-per-file': 'off',
    '@typescript-eslint/object-curly-spacing': 'off',
    'object-shorthand': ['warn', 'always'],
    'no-underscore-dangle': 'warn',
    'no-var': 'warn',
    'no-unused-vars': 'warn',
    'no-multi-spaces': 'warn',
    'space-in-parens': 'warn',
    'no-multiple-empty-lines': 'warn',
    'prefer-const': 'warn',
    'no-use-before-define': 'warn',
  }
};

