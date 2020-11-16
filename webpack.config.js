const path = require('path');


module.exports = {
    entry: './src/index.js',
    output: {
        libraryTarget: 'umd',
        library: 'Components',
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    optimization: {
        nodeEnv: 'none',
        minimize: false
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};