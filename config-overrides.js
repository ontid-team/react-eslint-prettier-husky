const {
  override,
  fixBabelImports,
  addWebpackResolve,
  addDecoratorsLegacy,
  addWebpackPlugin,
} = require('customize-cra');
const path = require('path');

module.exports = override(
  addDecoratorsLegacy(),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  addWebpackResolve({
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@context': path.resolve(__dirname, 'src/context/index.ts'),
      '@data': path.resolve(__dirname, 'src/data'),
      '@entities': path.resolve(__dirname, 'src/entities'),
      '@helpers': path.resolve(__dirname, 'src/helpers/index.ts'),
      '@hooks': path.resolve(__dirname, 'src/hooks/index.ts'),
      '@layouts': path.resolve(__dirname, 'src/layouts/index.ts'),
      '@libs': path.resolve(__dirname, 'src/libs/index.ts'),
      '@modules': path.resolve(__dirname, 'src/modules'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@routes': path.resolve(__dirname, 'src/routes/index.ts'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@ui': path.resolve(__dirname, 'src/ui/index.ts'),
      '@utility-types': path.resolve(__dirname, 'src/utility-types/index.ts'),
      '@utils': path.resolve(__dirname, 'src/utils/index.ts'),
      '@widgets': path.resolve(__dirname, 'src/widgets'),
    },
  }),
);
