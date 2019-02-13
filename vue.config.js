const path = require('path')
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'src/'),
      },
    },
  },
  baseUrl:
    process.env.NODE_ENV === 'production'
      ? '/vue-snake-game'
      : 'http://localhost:8080',
  // pwa: {
  //   workboxPluginMode: 'InjectManifest',
  //   workboxOptions: {
  //     swSrc: 'src/service-worker.js',
  //     swDest: 'service-worker.js',
  //   },
  //   themeColor: '#1da025',
  // },
}
