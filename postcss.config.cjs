module.exports = {
    plugins: [
      require('autoprefixer'),
      require('postcss-preset-env')({
        stage: 0,
        features: {
          'nesting-rules': true,
          'custom-properties': {
            preserve: true
          }
        }
      }),
      require('postcss-modules')({
        generateScopedName: '[name]__[local]___[hash:base64:5]'
      }),
      require('stylelint')({
        configFile: '.stylelintrc'
      }),
      require('cssnano')({
        autoprefixer: {
          add: true,
          remove: true,
          browsers: ['last 2 versions']
        },
        discardComments: {
          removeAll: true
        },
        discardUnused: true,
        mergeIdents: false,
        reduceIdents: false,
        safe: true,
        sourcemap: true
      })
    ]
  }