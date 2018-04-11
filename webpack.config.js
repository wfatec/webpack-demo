const path = require('path')
module.exports = {
  mode: 'development',
  output: {
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        use:[
        {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-react']
            }
        }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
        {
            loader: 'file-loader',
            options: {}
        }]
       },
       {
         test: /\.css$/,
         use: [{
           loader: 'style-loader'
         },{
           loader: 'css-loader'
         }]
       }
    ]
  }
}