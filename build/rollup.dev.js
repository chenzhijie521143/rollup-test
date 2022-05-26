
// import babel from 'rollup-plugin-babel';
import babel from '@rollup/plugin-babel';
import serve from 'rollup-plugin-serve';
import { terser } from 'rollup-plugin-terser';
import livereload from 'rollup-plugin-livereload';
import json from '@rollup/plugin-json';
// import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from 'rollup-plugin-replace';
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
  output: [
    {
      file: 'example/dist/bundle.js',
      format: 'umd',
      //当入口文件有export时，'umd'格式必须指定name
      //这样，在通过<script>标签引入时，才能通过name访问到export的内容。
      name: pkg.name,
    },
    {
      file: 'example/dist/bundle.es.js',
      format: 'es',
    }
  ],
  plugins: [
    // typescript(),
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
    // terser(), // 压缩js代码
    livereload(path.join(__dirname, '../example/dist')),  // 热更新 监听本地文件
    serve({
      // open: true, // 自动打开页面
      port: 8000,
      sourcemap: true,
      contentBase: path.join(__dirname, '../example'),
    }),
    replace({ // 设置环境变量
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
}