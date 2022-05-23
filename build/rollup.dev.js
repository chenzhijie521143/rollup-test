
import babel from 'rollup-plugin-babel';
import serve from 'rollup-plugin-serve';
import { terser } from 'rollup-plugin-terser';
import livereload from 'rollup-plugin-livereload';
import json from '@rollup/plugin-json';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from 'rollup-plugin-replace';
import path from 'path';

import pkg from '../package.json';

export default {
  input: 'src/index.tsx',
  output: {
    file: 'example/dist/bundle.js',
    format: 'umd',
    //当入口文件有export时，'umd'格式必须指定name
    //这样，在通过<script>标签引入时，才能通过name访问到export的内容。
    name: pkg.name,
  },
  plugins: [
    typescript(),
    resolve(),
    commonjs(),
    json(), // 支持json 文件导入
    babel({
      exclude: 'node_modules/**',
    }),
    terser(),
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