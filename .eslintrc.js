module.exports = {
  env: {
    browser: true // enable all browser global variables
  },
  parser: '@typescript-eslint/parser',  // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module' // Allows for the use of imports
  },
  extends: [
    'airbnb',  // Uses airbnb, it including the react rule(eslint-plugin-react/eslint-plugin-jsx-a11y)
    // 'plugin:@typescript-eslint/recommended', // Optional enable, will more stricter
    // 'plugin:import/typescript', // Use prettier/react to pretty react syntax
    // 'plugin:promise/recommended',
    'plugin:react/recommended',
    // 'plugin:prettier/recommended',
    // 'prettier/@typescript-eslint'
  ],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  plugins: [
    '@typescript-eslint',
    'react-hooks',
    // 'promise'
  ],
  rules: {
    // 下面的这些需要禁用，然后启用 @typescript-eslint 下同名的
    'no-unused-vars': ['off'],
    'no-useless-constructor': ['off'],
    camelcase: 'off',
    indent: ['off'],
    'no-empty-function': 'off',
    'react/jsx-filename-extension': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-props-no-spreading': 'off',
    // "semi": [2, "never"],
    // 启用 @typescript-eslint 下同名的规则，见前一条注释
    '@typescript-eslint/no-unused-vars': ['error', {
      vars: 'all',
      args: 'none',
      ignoreRestSiblings: true,
    }],
    '@typescript-eslint/no-useless-constructor': ['error'],
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/no-use-before-define': ['error'],

    // 见前一条注释，结束
    'no-undef': 'off',
    'arrow-parens': 'off',
    'max-len': ['error', 160],
    'no-underscore-dangle': 'off',
    'prefer-template': 'off',
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: true,
      },
    ],
    'no-plusplus': 'off',
    'no-restricted-syntax': 'off',
    'no-mixed-operators': 'off',
    'no-else-return': ['off'],
    'no-param-reassign': 'off',
    'no-continue': 'off',
    'no-unused-expressions': 'off',
    'arrow-body-style': 'off',
    'operator-linebreak': 'off',
    'import/no-unresolved': 'off',
    'react/state-in-constructor': 'off',
    'react/sort-comp': 'off',
    'class-methods-use-this': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'no-use-before-define': 'off',
    'import/no-extraneous-dependencies': 0,

    // react-hooks相关规则
    'react-hooks/rules-of-hooks': 'error', // 检查 Hook 的规则
    'react-hooks/exhaustive-deps': 'error', // 检查 effect 的依赖
    'react/require-default-props': 'off',
  },
};