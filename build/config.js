// config.js
const commonjs = require('rollup-plugin-commonjs');
// const resolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');
const { uglify } = require('rollup-plugin-uglify');

// const extensions = [ '.ts', '.js' ];

module.exports = exports = [
    {
        input: './src/index.js',
        output: {
            file: './dist/security-text.esm.js',
            format: 'esm',
        },
        external: [ 'core-js' ],
        plugins: [
            // resolve({
            //     extensions,
            // }),
            commonjs(),
            babel({
                exclude: 'node_modules/**',
            }),
        ],
    },

    {
        input: './src/index.js',
        output: {
            file: './dist/security-text.cjs.js',
            format: 'cjs',
        },
        external: [ 'core-js', 'vue' ],
        plugins: [
            // resolve({
            //     extensions,
            // }),
            commonjs(),
            babel({
                exclude: 'node_modules/**',
            }),
        ],
    },
    {
        input: './src/index.js',
        output: {
            file: './dist/security-text.js',
            name: 'LargeList',
            format: 'umd',
        },
        external: [ 'core-js', 'vue' ],
        plugins: [
            // resolve({
            //     extensions,
            // }),
            commonjs(),
            babel({
                exclude: 'node_modules/**',
            }),
        ],
    },
    {
        input: './src/index.js',
        output: {
            file: './dist/security-text.min.js',
            name: 'LargeList',
            format: 'umd',
        },
        external: [ 'core-js', 'vue' ],
        plugins: [
            // resolve({
            //     extensions,
            // }),
            commonjs(),
            babel({
                exclude: 'node_modules/**',
            }),
            uglify(),
        ],
    },
];