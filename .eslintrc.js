module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
    },
    plugins: ['react'],
    rules: {},
    globals: {
        render: 'readonly',
        beforeEach: 'writable',
        it: 'writable',
    },
}
