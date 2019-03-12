var path=require('path');
console.log("Hello World");
console.log(path.join(__dirname, 'build'))
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, 'build'),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: 'url-loader?limit=10&name=images/[name].[ext]'
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                        query: {
                            singleton: true
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ]
            }
        ]
    },
    resolve: {
        alias: {
            "react-native": "react-native-web"
        },
        extensions: [ '.web.js', '.js' ]    
     }
};