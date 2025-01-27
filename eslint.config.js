import eslintPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'

export default [
    {
        files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
        ignores: ['**/*', '!src/**'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module'
            }
        },
        plugins: {
            '@typescript-eslint': eslintPlugin
        },
        rules: {
            indent: ['error', 4],
            'linebreak-style': ['error', 'unix'],
            quotes: ['error', 'single'],
            semi: ['error', 'never'],
            'eol-last': ['error', 'never'],
            'comma-dangle': ['error', 'never'],
            'space-before-function-paren': ['error', 'never'],
            'no-trailing-spaces': ['error'],
            'object-curly-spacing': ['error', 'always'],
            'array-bracket-spacing': ['error', 'never'],
            'no-var': ['error'],
            'prefer-const': ['error'],
            'arrow-parens': ['error', 'as-needed'],
            'arrow-spacing': [
                'error', {
                    before: true, after: true
                }
            ],
            'spaced-comment': ['error', 'never'],
            eqeqeq: ['error', 'always'],
            'no-console': ['warn'],
            curly: ['error', 'all'],
            'space-infix-ops': ['error'],
            'array-bracket-newline': ['error', { multiline: true }],
            'comma-spacing': [
                'error', {
                    before: false, after: true
                }
            ],
            'max-len': ['error', { code: 120 }],
            'func-call-spacing': ['error', 'never'],
            'space-in-parens': ['error', 'never'],
            'no-whitespace-before-property': ['error'],
            'brace-style': ['error', '1tbs'],
            'object-curly-newline': [
                'error', {
                    multiline: true, consistent: true, minProperties: 2
                }
            ],
            'newline-before-return': ['error'],
            'no-multiple-empty-lines': ['error', { max: 1 }],
            'padded-blocks': ['error', 'never'],
            'space-before-blocks': ['error', 'always'],
            'function-paren-newline': ['error', 'never'],
            'dot-location': ['error', 'property']
        }
    }
]