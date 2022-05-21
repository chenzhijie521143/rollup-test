import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import path from 'path';
export default {
  input: 'src/index.js',
  output: {
    file: 'example/dist/bundle.umd.js',
    format: 'umd',
  },
  plugins:[
    // 热更新 监听本地文件
    livereload('example/dist'),
    serve({
      open: true, // 自动打开页面
      port: 8000, 
      sourcemap: true,
      contentBase: path.join(__dirname, '../example/'),
    }),
  ]
}