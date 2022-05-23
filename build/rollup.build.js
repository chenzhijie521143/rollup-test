
import babel from 'rollup-plugin-babel';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  external: ['react', 'react-dom'], // 配置第三方库不打包，而是使用外部依赖
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