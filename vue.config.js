"use strict";
const path = require("path")

module.exports = {
  devServer: {
    port: 8090,
    open: true
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, './src')
      }
    }
  },
  css:{
    requireModuleExtension: true,
    loaderOptions:{
      less:{
        lessOptions:{
          javascriptEnabled: true
        }
      }
    }
  }
}
