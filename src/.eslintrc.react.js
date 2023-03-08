module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [`plugin:react/jsx-runtime`, `plugin:react/recommended`, `airbnb`],
  plugins: [`react`],
  rules: {
    'import/extensions': `off`,
    'import/no-unresolved': `off`,
    'no-unused-vars': `off`,
    quotes: [`error`, `backtick`],
    'react/jsx-filename-extension': [
      2,
      {
        extensions: [`.jsx`, `.tsx`],
      },
    ],
    'react/prefer-stateless-function': `off`,
    'react/destructuring-assignment': [`off`],
    'react/require-default-props': `off`,
    'react/no-did-update-set-state': `off`,
    'react/button-has-type': `off`,
    'react/jsx-props-no-spreading': `off`,
    'react/react-in-jsx-scope': 0,
    'max-len': [`error`, 200],
    'react/function-component-definition': [
      1,
      {
        namedComponents: `arrow-function`,
        unnamedComponents: `arrow-function`,
      },
    ],
    'import/prefer-default-export': `off`,
    'jsx-a11y/anchor-is-valid': `off`,
  },
};
