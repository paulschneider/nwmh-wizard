var UglifyJsPlugin = require("webpack/lib/optimize/UglifyJsPlugin");

module.exports = {
    // where is the entry point to our app
	entry: './src/app.js',
    output: {
        // where are the files we want to compile
         path: './dist',
         // where do we want to output the compiled 
         filename: 'app.bundle.js'
     },
    module: {
        loaders: [{
            // use babel to compile the ES6 
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }, {
            // allows us to load in html markup to JS 
            test: /\.html$/,
            loader: 'raw'
        }]
     },
     // show colours in the console output
    stats: {
        colors: true
    },
    plugins: [
        // new UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // })
    ]
}