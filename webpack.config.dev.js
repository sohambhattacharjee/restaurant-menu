import path from 'path'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

module.exports = {
    devtool: 'eval-source-map',
    mode: 'development',
    entry: [
        'webpack-hot-middleware/client',
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
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                BROWSER: true
            }
        })
    ]
}