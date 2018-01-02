/* eslint-disable flowtype/require-valid-file-annotation */

import json from 'rollup-plugin-json'
import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import builtins from 'rollup-plugin-node-builtins'
import { minify } from 'uglify-es'

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.es.js',
      format: 'es',
      name: 'redux-server-log'
    },
    {
      file: 'dist/index.js',
      format: 'umd',
      name: 'redux-server-log'
    }
  ],
  plugins: [
    json(),
    builtins(),
    babel(),
    resolve(),
    commonjs(),
    uglify({}, minify)
  ].concat(
  ),
  sourceMap: false,
  external: []
}
