var webpack = require("webpack");
module.exports = {
    devtool: 'eval-source-map',
    entry:__dirname+"/index.js",
    output:{
        path:__dirname+'/public',
        filename:'bundle.js'
    },
    devServer:{
        contentBase: "./public",
        historyApiFallback: true,
        inline: true,
        port: '8080'
    },
    module:{
        rules:[
            {
                test:/(\.jsx|\.js)$/,
                use:{
                    loader: "babel-loader",
                    options:{
                        presets:[
                            "es2015","stage-0", "react"
                        ],
                        "plugins": ["transform-object-rest-spread"]
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [{
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 102400
                    }
                }]
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin("yhyh copyRight")
    ]
}