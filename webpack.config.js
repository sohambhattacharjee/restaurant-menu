var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: [
        './src'
    ],
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx'],
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: `bundle.js`,
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                BROWSER: true
            }
        })
    ]
}