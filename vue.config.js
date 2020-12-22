const path = require('path')

module.exports = {
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    loader: ['sass-loader']
                }
            ]
        },
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                '@': path.resolve(__dirname, 'src/')
            }
        }
    },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    // 自动转换css单位值
                    require('postcss-pxtorem')({
                        rootValue: 37.5,
                        selectorBlackList: ['weui', 'mu'],
                        propList: ['*']
                    })
                ]
            }
        }
    }
}