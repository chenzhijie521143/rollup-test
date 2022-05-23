
import babel from 'rollup-plugin-babel';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from 'rollup-plugin-replace';
import path from 'path';

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
    // 热更新 监听本地文件
    livereload('example/dist'),
    serve({
      // open: true, // 自动打开页面
      port: 8000,
      sourcemap: true,
      contentBase: path.join(__dirname, '../example/'),
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
}