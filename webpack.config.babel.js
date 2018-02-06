import webpack from 'webpack';

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    },
    {
      test: /\.json$/,
        loader: 'json-loader'
    }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx','.webpack.js','.web.js']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
 target: 'node',
 plugins: [
    ["transform-inline-environment-variables", {
      include: [
        "NODE_ENV"
      ]
    }]
  ]
 // plugins: [
 //      new webpack.DefinePlugin({
 //        'process.env.NODE_ENV': JSON.stringify('development')
 //      })
 // ]
};
