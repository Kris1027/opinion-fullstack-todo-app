import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        files: ['**/*.js'],
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: 'module',
            globals: {
                ...globals.node,
            },
        },
        rules: {
            semi: ['error', 'always'],
            quotes: ['error', 'single'],
            'no-console': 'off',
        },
    },
];
