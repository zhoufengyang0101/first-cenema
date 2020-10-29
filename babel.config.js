module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    // 'transform-vue-jsx',
    // 'transform-runtime',
    [
      'component',
      {
        libraryName: 'mint-ui',
        style: true
      }
    ]
  ]
}
