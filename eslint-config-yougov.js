'use strict';

module.exports = {
    parserOptions: {
        ecmaVersion: 2017,
    },

    env: {
        es6: true,
    },

    rules: {
        // Rules are divided into sections from http://eslint.org/docs/rules/

        // Possible errors
        'no-await-in-loop': 'error',
        'no-compare-neg-zero': 'error',
        'no-cond-assign': 'error',
        'no-console': 'off',
        'no-constant-condition': ['error', {checkLoops: false}],
        'no-control-regex': 'error',
        'no-debugger': 'error',
        'no-dupe-args': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-empty-character-class': 'error',
        'no-empty': 'error',
        'no-ex-assign': 'error',
        'no-extra-boolean-cast': 'error',
        'no-extra-parens': 'off',
        'no-extra-semi': 'error',
        'no-func-assign': 'error',
        'no-inner-declarations': 'error',
        'no-invalid-regexp': 'error',
        'no-irregular-whitespace': 'error',
        'no-obj-calls': 'error',
        'no-prototype-builtins': 'error',
        'no-regex-spaces': 'error',
        'no-sparse-arrays': 'error',
        'no-template-curly-in-string': 'error',
        'no-unreachable': 'error',
        'use-isnan': 'error',
        'no-unsafe-finally': 'error',
        'no-unsafe-negation': 'error',
        'valid-jsdoc': 'off', // TODO enable?
        'valid-typeof': 'error',
        'no-unexpected-multiline': 'error',

        // Best practices
        'accessor-pairs': 'error',
        'array-callback-return': 'error',
        'block-scoped-var': 'off',
        'class-methods-use-this': 'off',
        'comma-dangle': ['error', {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'always-multiline',
        }],
        complexity: ['warn', 10],
        'consistent-return': 'error',
        curly: 'error',
        'default-case': 'error',
        'dot-notation': 'error',
        'dot-location': ['error', 'property'],
        eqeqeq: ['error', 'smart'],
        'guard-for-in': 'off',
        'no-alert': 'error',
        'no-caller': 'error',
        'no-case-declarations': 'error',
        'no-div-regex': 'off',
        'no-else-return': 'error',
        'no-empty-function': 'error',
        'no-empty-pattern': 'error',
        'no-eq-null': 'off',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-extra-label': 'error',
        'no-fallthrough': 'error',
        'no-floating-decimal': 'error',
        'no-global-assign': 'error',
        'no-implicit-coercion': ['error', {boolean: false, number: true, string: false}],
        'no-implicit-globals': 'error',
        'no-implied-eval': 'error',
        'no-invalid-this': 'off',
        'no-iterator': 'error',
        'no-labels': ['error', {allowLoop: true, allowSwitch: true}],
        'no-lone-blocks': 'off',
        'no-loop-func': 'off',
        'no-magic-numbers': 'off',
        'no-multi-spaces': 'error',
        'no-multi-str': 'error',
        'no-new-func': 'error',
        'no-new-wrappers': 'error',
        'no-new': 'error',
        'no-octal-escape': 'error',
        'no-octal': 'error',
        'no-param-reassign': 'off',
        'no-process-env': 'off',
        'no-proto': 'error',
        'no-redeclare': 'error',
        // We's use it for _.assign etc. but it won't work for `import {assign} from 'lodash'`.
        'no-restricted-properties': 'off',
        'no-return-assign': 'error',
        'no-script-url': 'error',
        'no-self-assign': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-throw-literal': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-unused-expressions': 'error',
        'no-unused-labels': 'error',
        'no-useless-call': 'error',
        'no-useless-concat': 'error',
        'no-useless-escape': 'error',
        'no-useless-return': 'error',
        'no-void': 'error',
        'no-warning-comments': 'off',
        'no-with': 'error',
        'prefer-promise-reject-errors': 'error',
        radix: 'off',
        'require-await': 'off',
        'vars-on-top': 'off',
        'wrap-iife': ['error', 'inside'],
        yoda: 'error',

        // Strict mode
        strict: ['error', 'safe'], // 'global' in Node, 'function' in a browser

        // Variables
        'init-declarations': 'off',
        'no-catch-shadow': 'off',
        'no-delete-var': 'error',
        'no-label-var': 'error',
        'no-restricted-globals': ['error', 'arguments', 'event'],
        'no-shadow-restricted-names': 'error',
        'no-shadow': 'off',
        'no-undef-init': 'error',
        'no-undef': 'error',
        'no-undefined': 'off',
        'no-unused-vars': ['error', {args: 'all', argsIgnorePattern: '^__'}],
        'no-use-before-define': 'off',

        // Node.js
        'callback-return': 'off',
        'global-require': 'off',
        'handle-callback-err': 'error',
        'no-mixed-requires': 'off',
        'no-new-require': 'error',
        'no-path-concat': 'off',
        'no-process-exit': 'error',
        'no-restricted-imports': 'off',
        'no-restricted-modules': 'off',
        'no-sync': 'off', // In some projects this might be useful

        // Stylistic issues
        'array-bracket-spacing': ['error', 'never'],
        'block-spacing': ['error', 'never'],
        'brace-style': 'error',
        camelcase: 'off',
        'capitalized-comments': 'off',
        'comma-spacing': 'error',
        'comma-style': 'error',
        'computed-property-spacing': ['error', 'never'],
        'consistent-this': 'off',
        'eol-last': 'error',
        'func-call-spacing': ['error', 'never'],
        'func-name-matching': 'off',
        'func-names': 'off',
        'func-style': 'off',
        'id-length': 'off',
        'id-match': 'off',
        'id-blacklist': ['error', 'arguments', 'event'],
        indent: ['error', 4, {SwitchCase: 1, MemberExpression: 1}],
        'jsx-quotes': 'off',
        'key-spacing': 'error',
        'keyword-spacing': 'error',
        'line-comment-position': 'off',
        // Re-enable when commented out lines & ESLint pragmas work; was:
        // [2, {beforeBlockComment: true, beforeLineComment: true, allowBlockStart: true}],
        'lines-around-comment': 'off',
        'lines-around-directive': ['error', 'always'],
        'linebreak-style': 'off',
        'max-depth': 'off',
        'max-len': ['error', 120, 4, {ignoreUrls: true, ignoreRegExpLiterals: true}],
        'max-lines': 'off',
        'max-nested-callbacks': 'off',
        'max-params': 'off',
        'max-statements': 'off',
        'max-statements-per-line': ['error', {max: 1}],
        'multiline-ternary': 'off',
        'new-cap': 'off',
        'new-parens': 'error',
        'newline-after-var': 'off',
        'newline-before-return': 'off',
        'newline-per-chained-call': ['error', {ignoreChainWithDepth: 4}],
        'no-array-constructor': 'error',
        'no-bitwise': 'error',
        'no-continue': 'off',
        'no-inline-comments': 'off',
        'no-lonely-if': 'error',
        'no-mixed-operators': ['error', {groups: [['&&', '||']], allowSamePrecedence: true}],
        'no-mixed-spaces-and-tabs': 'error',
        'no-multi-assign': 'off',
        'no-return-await': 'error',
        'no-multiple-empty-lines': ['error', {max: 2, maxEOF: 1}],
        'no-nested-ternary': 'error',
        'no-negated-condition': 'error',
        'no-new-object': 'error',
        'no-plusplus': 'off',
        // 'WithStatement' is already handled via no-with:
        'no-restricted-syntax': [
            'error',
            {
                selector: 'CallExpression[callee.name="fdescribe"]',
                message: 'Using `fdescribe` is not allowed',
            },
            {
                selector: 'CallExpression[callee.object.name="describe"][callee.property.name="only"]',
                message: 'Using `describe.only` is not allowed',
            },
            {
                selector: 'CallExpression[callee.name="fit"]',
                message: 'Using `fit` is not allowed',
            },
            {
                selector: 'CallExpression[callee.object.name="it"][callee.property.name="only"]',
                message: 'Using `it.only` is not allowed',
            },
        ],
        'no-tabs': 'error',
        'no-ternary': 'off',
        'no-trailing-spaces': 'error',
        'no-underscore-dangle': 'off',
        'no-unneeded-ternary': 'error',
        'no-whitespace-before-property': 'error',
        'nonblock-statement-body-position': 'off',
        'object-curly-newline': 'off',
        'object-curly-spacing': ['error', 'never'],
        'object-property-newline': ['error', {allowMultiplePropertiesPerLine: true}],
        'one-var': ['error', {initialized: 'never'}],
        'one-var-declaration-per-line': 'off', // I don't use this declaration style
        'operator-assignment': 'error',
        'operator-linebreak': ['error', 'after'],
        'padded-blocks': 'off',
        'quote-props': ['error', 'as-needed'],
        quotes: ['error', 'single'],
        'require-jsdoc': 'off',
        'semi-spacing': 'error',
        semi: 'error',
        'sort-keys': 'off',
        'sort-vars': 'off',
        'sort-imports': 'off', // It sorts by the member syntax, not by module names
        'symbol-description': 'error',
        'space-before-blocks': 'error',
        'space-before-function-paren': ['error', {anonymous: 'always', named: 'never'}],
        'space-in-parens': ['error', 'never'],
        'space-infix-ops': 'error',
        'space-unary-ops': 'error',
        'spaced-comment': ['error', 'always', {
            line: {
                exceptions: ['/'],
            },
            block: {
                markers: ['*', '**', '!'],
            },
        }],
        'template-tag-spacing': ['error', 'never'],
        'unicode-bom': ['error', 'never'],
        'wrap-regex': 'off',

        // ECMAScript 6
        'arrow-body-style': ['error', 'as-needed'],
        'arrow-parens': ['error', 'as-needed'],
        'arrow-spacing': 'error',
        'constructor-super': 'error',
        'generator-star-spacing': ['error', {before: true, after: false}],
        // Arrow returning a ternary is disallowed; wrapping in braces doesn't help.
        'no-class-assign': 'error',
        'no-confusing-arrow': 'off',
        'no-const-assign': 'error',
        'no-dupe-class-members': 'error',
        'no-duplicate-imports': 'error',
        'no-new-symbol': 'error',
        'no-this-before-super': 'error',
        'no-var': 'error',
        'no-useless-computed-key': 'error',
        'no-useless-constructor': 'error',
        'no-useless-rename': 'error',
        'object-shorthand': 'error',
        'prefer-arrow-callback': 'error',
        'prefer-const': 'error',
        'prefer-destructuring': 'off',
        'prefer-numeric-literals': 'error',
        'prefer-spread': 'error',
        'prefer-rest-params': 'error',
        'prefer-template': 'error',
        'rest-spread-spacing': ['error', 'never'],
        'require-yield': 'off',
        'template-curly-spacing': ['error', 'always'],
        'yield-star-spacing': ['error', 'after'],

        // Deprecated
        'no-native-reassign': 'off',
        'no-negated-in-lhs': 'off',
        'no-spaced-func': 'off',
        'prefer-reflect': 'off',
    },
};
