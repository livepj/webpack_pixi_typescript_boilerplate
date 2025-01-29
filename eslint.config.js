import stylisticPlugin from '@stylistic/eslint-plugin'
import tsParser from '@typescript-eslint/parser'

export default [
    {
        files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
        ignores: ['node_modules/*', '!src/**'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module'
            }
        },
        plugins: {
            '@stylistic': stylisticPlugin
        },
        rules: {
            //🔹 Основные правила стиля
            '@stylistic/indent': ['error', 4],
            '@stylistic/linebreak-style': ['error', 'unix'],
            '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
            '@stylistic/semi': ['error', 'never'],
            '@stylistic/eol-last': ['error', 'never'],
            '@stylistic/comma-dangle': ['error', 'never'],
            '@stylistic/space-before-function-paren': ['error', 'never'],
            '@stylistic/no-trailing-spaces': ['error'],
            '@stylistic/object-curly-spacing': ['error', 'always'],
            '@stylistic/array-bracket-spacing': ['error', 'never'],
            '@stylistic/arrow-parens': ['error', 'as-needed'],
            '@stylistic/arrow-spacing': ['error', {
                before: true,
                after: true
            }],
            '@stylistic/spaced-comment': ['error', 'never'],
            '@stylistic/space-infix-ops': ['error', { int32Hint: false }],
            '@stylistic/space-in-parens': ['error', 'never'],
            '@stylistic/no-whitespace-before-property': ['error'],
            '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
            '@stylistic/comma-spacing': ['error', {
                before: false,
                after: true
            }],
            '@stylistic/max-len': ['error', { code: 120 }],
            '@stylistic/func-call-spacing': ['error', 'never'],
            '@stylistic/dot-location': ['error', 'property'],
            '@stylistic/padded-blocks': ['error', 'never'],
            '@stylistic/space-before-blocks': ['error', 'always'],
            '@stylistic/object-curly-newline': ['error', {
                multiline: true,
                consistent: true,
                minProperties: 5
            }],
            '@stylistic/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
            '@stylistic/key-spacing': ['error', {
                beforeColon: false,
                afterColon: true
            }],

            //🔹 TypeScript-специфические правила
            '@stylistic/type-annotation-spacing': ['error', {
                before: false,
                after: true,
                overrides: { arrow: { before: true, after: true } }
            }],
            '@stylistic/member-delimiter-style': [
                'error',
                {
                    multiline: {
                        delimiter: 'none',
                        requireLast: false
                    },
                    singleline: {
                        delimiter: 'semi',
                        requireLast: false
                    }
                }
            ],
            '@stylistic/no-extra-parens': ['error', 'functions'],
            '@stylistic/no-extra-semi': ['error'],
            '@stylistic/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
            '@stylistic/quote-props': ['error', 'as-needed'],
            '@stylistic/block-spacing': ['error', 'always'],
            '@stylistic/keyword-spacing': ['error', {
                before: true,
                after: true
            }],
            '@stylistic/lines-around-comment': ['error', {
                beforeBlockComment: true,
                beforeLineComment: false
            }],

            //🔹 Кодстайл правил между блоками
            '@stylistic/no-multiple-empty-lines': ['error', { max: 1 }],

            //🔹 Общие правила для лучшей читаемости кода
            'no-var': ['error'],
            'prefer-const': ['error'],
            eqeqeq: ['error', 'always'],
            'no-console': ['warn'],
            curly: ['error', 'all']
        }
    }
]