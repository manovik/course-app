const path = require('path');

const resolvePath = (p) => path.resolve(__dirname, p);

module.exports = {
  webpack: {
    alias: {
      '@components': resolvePath('./src/components'),
      '@common': resolvePath('./src/common'),
      '@helpers': resolvePath('./src/helpers'),
      '@mock': resolvePath('./src/mock'),
      '@services': resolvePath('./src/services'),
    },
  },
};
