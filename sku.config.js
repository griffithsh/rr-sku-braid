module.exports = {
  libraryEntry: 'src/widget.tsx',
  libraryName: 'RRWidget',
  renderEntry: 'src/render.tsx',
  environments: ['development', 'production'],
  publicPath: '/path/to/public/assets/', // <-- Required for sku build output
  orderImports: true,
};
