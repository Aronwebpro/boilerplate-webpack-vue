module.exports = {
    root: true,
    env: {
        jasmine: true,
        node: true
    },
    globals: {
        jest: true
    },
    extends: [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    rules: {
        indent: ["error", 4],
        semi: ['error', 'never'],
        'space-before-function-paren': 0,
        'vue/html-quotes': ['error', 'double'],
        "vue/mustache-interpolation-spacing": ["error", "always"],
        'vue/html-self-closing': [
            'error',
            {
                html: {
                    'void': 'always',
                    normal: 'any',
                    component: 'always'
                }
            }
        ],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
};

