import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import alias from '@rollup/plugin-alias';
import path from 'path';

import pkg from '../package.json';

const extensions = [
  '.js', '.jsx', '.ts', '.tsx',
];

export default {
  input: 'src/index.tsx',
  external: [],
  output: {
    file: 'dist/bundle.js',
    format: 'umd',
    //当入口文件有export时，'umd'格式必须指定name
    //这样，在通过<script>标签引入时，才能通过name访问到export的内容。
    name: pkg.name,
    sourcemap: true
  },
  plugins: [
    resolve({ extensions }), // 在node_modules中找到并捆绑第三方依赖项
    commonjs(), // 用来将 CommonJS 转换成 ES6 模块
    json(), // 支持json 文件导入
    babel({
      extensions,
      exclude: 'node_modules/**',
    }),
    postcss({
      plugins: [
        autoprefixer(), // 加前缀
        cssnano(), // 压缩css
      ],
      extract: 'css/index.css', // 单独抽离css文件
    }),
    alias({
      entries: [
        { find: '@', replacement: path.join(__dirname, '../src') },
      ]
    }),
    terser(), // 压缩js代码
  ]
}