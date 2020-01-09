
const path = require('path');

module.exports = {

    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules:[{
            loader: 'babel-loader',
            exclude: /node_modules/,
            test: /\.js$/
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }

};
