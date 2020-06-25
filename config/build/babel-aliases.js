const babelAliases = {
  '@/config': './src/config',
  '@/core': './src/core',
  '@/assets': './src/assets',
  '@/features': './src/features',
  '@/public': './public',
  '@/components': './src/components',
  '@/themes': './src/themes',
  '@/pages': './src/pages',
};

/**
 * Return aliases for babel
 */
const getBabelAliases = () => {
  return babelAliases;
};

module.exports = {
  getBabelAliases,
};
