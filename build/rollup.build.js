
import babel from 'rollup-plugin-babel';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.jsx',
  output: {
    file: 'example/dist/bundle.js',
    format: 'umd',
  },
  plugins: [
    resolve(),
    commonjs(),
    json(),
    babel({
      exclude: 'node_modules/**',
    }),
  ]
}