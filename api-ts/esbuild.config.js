const { build } = require('esbuild');
const esbuildPluginPino = require('esbuild-plugin-pino');

build({
  entryPoints: ['./src/index.ts'],
  bundle: true,
  minify: true,
  platform: 'node',
  external: ['pg-native'],
  outdir: 'dist',
  plugins: [esbuildPluginPino({ transports: ['pino-pretty'] })],
}).catch(() => process.exit(1));
