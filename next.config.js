  module.exports = {
   assetPrefix: '/sustainabilityAssets',
   async redirects() {
    return [
      {
        source: '/sustainabilityAssets/:slug*',
        destination: '/:slug*', // Matched parameters can be used in the destination
        permanent: true,
      },
    ]
  },
  };
  

