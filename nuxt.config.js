const path = require('path');

module.exports = {
  srcDir: 'client/',
  css: [
    '@assets/scss/reset.scss',
  ],
  head: {
    title: 'Joshua Yang',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'homepage,主页,个人主页,个人网站' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  loading: {
    color: '#3B8070',
  },
  build: {
    vendor: [
    ],

    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
  modules: [
    ['nuxt-sass-resources-loader', [
      path.resolve(__dirname, 'client/assets/scss/variable.scss'),
      path.resolve(__dirname, 'client/assets/scss/mixin.scss'),
    ]],
  ],
};
