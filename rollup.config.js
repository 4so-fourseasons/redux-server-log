/* eslint-disable flowtype/require-valid-file-annotation */

import json from 'rollup-plugin-json'
import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
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
    resolve({
      browser: true
    }),
    commonjs({
      include: 'node_modules/**'
    }),
    babel({
      plugins: ['external-helpers']
    }),
    json(),
    uglify({}, minify)
  ].concat(
  )
}
