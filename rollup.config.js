import filesize from 'rollup-plugin-filesize';
import { terser } from 'rollup-plugin-terser';
import resolve from 'rollup-plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import typescript from 'rollup-plugin-typescript2';
import svg from 'rollup-plugin-inline-svg';
import postcss from 'rollup-plugin-postcss';
import postcssLit from 'rollup-plugin-postcss-lit';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import { join } from 'path';

export default {
  input: join('src', 'index.ts'),
  output: {
    file: join('dist', 'index.js'),
    format: 'esm',
  },
  onwarn(warning) {
    if (warning.code !== 'THIS_IS_UNDEFINED') {
      console.error(`(!) ${warning.message}`);
    }
  },
  plugins: [
    peerDepsExternal(),
    typescript({
      exclude: ['src/**/*.spec.ts', 'src/**/*.stories.ts'],
    }),
    replace({ 'Reflect.decorate': 'undefined', preventAssignment: true }),
    resolve(),

    postcss({ inject: false }),
    postcssLit(),
    terser({
      module: true,
      warnings: true,
      mangle: {
        properties: {
          regex: /^__/,
        },
      },
    }),
    filesize({
      showBrotliSize: true,
    }),
    svg(),
  ]
};