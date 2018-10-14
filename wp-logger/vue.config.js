module.exports = {
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        data: '@import "@/scss/settings.scss";'
      }
    },
    modules: true
  },

  baseUrl: undefined,
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined
}
