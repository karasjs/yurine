import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
import json from '@rollup/plugin-json';

export default [{
  input: 'src/index.js',
  output: {
    name: 'yurine',
    file: 'index.js',
    format: 'umd',
    sourcemap: true,
    globals: {
      homunculus: 'homunculus',
    },
  },
  plugins: [
    babel({
      exclude: 'node_modules/**', // 只编译我们的源代码
      runtimeHelpers: true
    }),
    json(),
  ],
}, {
  input: 'src/index.js',
  output: {
    name: 'yurine',
    file: 'index.min.js',
    format: 'umd',
    sourcemap: true,
    globals: {
      homunculus: 'homunculus',
    },
  },
  plugins: [
    babel({
      exclude: 'node_modules/**', // 只编译我们的源代码
      runtimeHelpers: true
    }),
    json(),
    uglify({
      sourcemap: true,
    }),
  ],
}];
