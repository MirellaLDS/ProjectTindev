module.exports = {
    env: {
        es6: true,
        node: true,
    },
    extends: ['airbnb-base', 'prettier'],
    plugins: ['prettier', 'react'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {
        'react/jsx-uses-react': 1,
        'react/jsx-uses-vars': 1,
        'react/jsx-filename-extension': [
            'warn',
            { extensions: ['.jsx', '.js'] },
        ],
        'import/prefer-default-export': 'off',
        'no-console': ['error', { allow: ['tron'] }],
        'no-param-reassign': 'off',
        'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
        'no-underscore-dangle': 'off',
    },
};
