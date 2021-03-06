import buble from 'rollup-plugin-buble'
const packageJson = require('./package.json')

export default {
  entry: 'src/indexDisklet.js',
  external: [
    ...Object.keys(packageJson.dependencies),
    ...Object.keys(packageJson.browser)
  ],
  plugins: [buble()],
  targets: [
    {
      dest: packageJson.main,
      format: 'cjs',
      sourceMap: true
    },
    {
      dest: packageJson.module,
      format: 'es',
      sourceMap: true
    }
  ]
}
