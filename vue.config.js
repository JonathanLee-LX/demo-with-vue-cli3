const path = require('path');

const resolve = dir => path.resolve(__dirname, dir);

const MyAweSomeWebpackPlugin = function () {};

module.exports = {
    // 是否在生产环境下生成sourceMap，默认为true，设置为false可以提高构建速度
    productionSourceMap: true,
    filenameHashing: false,
    // 可选值，(true | false) | 'error' 设置为true，在开发环境下，每次保存代码都会使用lint工具检查一遍，
    // 设置为false，则不检查，设置为error会将lint错误输出为编译错误，导致编译失败，同时会将错误信息显示到浏览器上
    // process.env.NODE_ENV !== 'production'
    lintOnSave: true,
    devServer: {
        overlay: {
            warnings: true,
            errors: true,
        }
    },
    // configureWebpack用来配置webpack的配置，
    // 可选值：Object | Function
    // 如果为一个Object，会被webpackMerge合并到最终配置中
    // 如果是一个Function, 会接收一个webpack的配置对象，该函数可以直接修改config对象，也可以返回一个经过复制config对象
    configureWebpack: {
        resolve: {
            alias: {
                '@components': resolve('src/components')
            }
        }
    },
    // Type: Function
    // 是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。允许对内部的 webpack 配置进行更细粒度的修改。
    // vue-cli是通过webpack-chain这个库维护webpack的配置，这个库提供了一个 webpack 原始配置的上层抽象，使其可以定义具名的 loader 规则和具名插件，并有机会在后期进入这些规则并对它们的选项进行修改。
    chainWebpack: config => {
        config.resolve.alias
            .set('@components', resolve('src/components'));
        config.resolve.modules
            .add('src/components')
    }
}