import serve from 'rollup-plugin-serve';
import path from 'path';
export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.umd.js',
    format: 'umd',
  },
  plugins:[
  ]
}