module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    root: true,
    plugins: [ `@typescript-eslint/eslint-plugin`, `simple-import-sort`, `import` ],
    extends: [ `plugin:@typescript-eslint/eslint-recommended`, `plugin:@typescript-eslint/recommended` ],
    parser: `@typescript-eslint/parser`,
    parserOptions: {
        sourceType: `module`,
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12
    },
    settings: {
        'import/resolver': {
            typescript: {},
            node: {
                extensions: [ `.js`, `.jsx`, `.ts`, `.tsx`, `.d.ts` ]
            }
        }
    },
    rules: {
        quotes: [ `error`, `backtick` ],
        'simple-import-sort/imports': `error`,
        'simple-import-sort/exports': `error`,
        'import/newline-after-import': `error`,
        'import/no-duplicates': `error`,
        semi: 2,
        'comma-dangle': 2,
        'import/no-unresolved': 0,
        'no-use-before-define': 0,
        'import/extensions': 0,
        'object-curly-spacing': [ 2, `always` ],
        'array-bracket-spacing': [ 2, `always` ],
        'space-before-blocks': [ 2, `always` ],
        'keyword-spacing': [ 2 ],
        'space-in-parens': [ 2, `never` ],
        'no-param-reassign': 0,
        'no-shadow': 0,
        'no-empty-function': 0,
        'consistent-return': 0,
        'import/prefer-default-export': 0,
        '@typescript-eslint/no-shadow': [ 0 ],
        '@typescript-eslint/no-use-before-define': [ 0 ],
        '@typescript-eslint/no-unused-vars': [
            2,
            {
                argsIgnorePattern: `^_`
            }
        ],
        '@typescript-eslint/interface-name-prefix': `off`,
        '@typescript-eslint/explicit-function-return-type': `off`,
        '@typescript-eslint/explicit-module-boundary-types': `off`,
        '@typescript-eslint/no-explicit-any': `off`,
        '@typescript-eslint/no-non-null-assertion': `off`,
        '@typescript-eslint/member-delimiter-style': [
            1,
            {
                multiline: {
                    delimiter: `comma`,
                    requireLast: true
                },
                singleline: {
                    delimiter: `comma`,
                    requireLast: true
                }
            }
        ],
        '@typescript-eslint/quotes': [
            `error`,
            `single`,
            {
                allowTemplateLiterals: true
            }
        ],
        'func-style': [
            `warn`,
            `declaration`,
            {
                allowArrowFunctions: true
            }
        ]
    },
    overrides: [
        {
            files: [ `**/__tests__/*` ],
            env: {
                jest: true
            }
        }
    ],
    ignorePatterns: [ `dist` ]
};
