import express from 'express'
import path from 'path'
import React from 'react'
import routes from '../src/routes/routes'
import { StaticRouter, matchPath } from 'react-router'
import App from '../src/components/App'
import { renderToString } from 'react-dom/server'

const app = express()

app.use('/static', express.static(path.resolve('dist')))
app.use('/favicon.ico', express.static('./favicon.ico'))

let bundlePath = '/static/bundle.js'

//development specific settings
if (process.env.NODE_ENV !== 'production') {
    const webpack = require('webpack')
    const webpackconfig = require(path.resolve('webpack.config.dev.js'))
    const webpackMiddleware = require('webpack-dev-middleware')
    const webpackHotMiddleware = require('webpack-hot-middleware')

    const webpackCompiler = webpack(webpackconfig)
    const wpmw = webpackMiddleware(webpackCompiler, {})
    const wphmw = webpackHotMiddleware(webpackCompiler)
    app.use(wpmw)
    app.use(wphmw)

    bundlePath = '/bundle.js'
}

app.get('*', (req, res) => {
    const match = routes.find((route) => matchPath(req.originalUrl, route))
    if (!match) {
        res.send('Oops!! route not found')
    }
    else {
        //render to string
        const componentHtml = renderToString(
            <StaticRouter location={req.originalUrl}>
                <App />
            </StaticRouter>)

        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end(`<html>
            <head>
                <title>Restaurant Menu</title>
            </head>
            <body>
                <div id="app">${componentHtml}</div> 
                <script src="${bundlePath}" type="text/javascript"></script>   
            </body>
            </html>`)
    }
})

module.exports = app