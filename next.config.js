module.exports = {
  reactStrictMode: true,
  assetPrefix: 'testprefix',
  rewrites() {
    return [
      { source: '/testprefix/_next/:path*', destination: '/_next/:path*' }
    ]
  },
  future:{webpack5:false}
}
