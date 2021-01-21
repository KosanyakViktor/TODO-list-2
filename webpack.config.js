module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /.js$/,
                use: ['babel-loader']
            },
            {
                test: /.s?css$/,
                use: ['style-loader','css-loader','sass-loader']
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            outputPath: 'images',
                            name: '[name].[ext]',
                            limit: 8192,
                        },
                    },
                ],
            },
        ]
    }
};