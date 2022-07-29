import serve from 'rollup-plugin-serve';
import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import livereload from 'rollup-plugin-livereload';
import svg from 'rollup-plugin-inline-svg';
import postcss from 'rollup-plugin-postcss';
import postcssLit from 'rollup-plugin-postcss-lit';
import { join } from 'path';

const port = +(process.argv.find((t) => t.includes('port='))?.split('=')[1] || 10001);

export default {
  input: join('src', 'index.ts'),
  output: {
    file: join('dev', 'index.js'),
    format: 'esm',
  },
  onwarn(warning) {
    if (warning.code !== 'THIS_IS_UNDEFINED') {
      console.error(`(!) ${warning.message}`);
    }
  },
  plugins: [
    typescript(),
    replace({ 'Reflect.decorate': 'undefined', preventAssignment: true }),
    resolve(),
    postcss({ inject: false }),
    postcssLit(),
    svg(),
    serve({
      port,
      open: true,
      verbose: true,
      contentBase: ['dev', join('..', '..', 'static')],
    }),
    livereload({ watch: 'dev' }),
  ],
};
