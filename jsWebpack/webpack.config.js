const HtmlWebpackPlugin = require('html-webpack-plugin');//生成html插件
const path = require('path');
const TerserWebpackPlugin = require("terser-webpack-plugin")//js代码压缩插件
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')//抽取css代码为独立文件
const clear= require("clean-webpack-plugin");  //导入清除dist插件 不用手动每次去删除dist文件夹


module.exports = {

    // model指定用哪种模式编译，默认是production
    mode:"production",

    // devtool用来控制生成哪种粒度的source map
    devtool:'source-map',

    // 入口文件,没有顺序限制
    entry:{
      index: "./网易云copy/js/index.js",
      research: "./网易云copy/js/research.js",
      song:"./网易云copy/js/song.js",
      songDetail:"./网易云copy/js/songDetail.js",
      songList:"./网易云copy/js/songList.js"
    },
    
    
    // 出口文件        //配置多个出口文件
    output:{
        filename:"[name].js",
        path: path.resolve(__dirname, "dist")     
    },

    // 编译规则与流程
    module:{
        rules:[
          {
            test:/\.less$/,
            use:[                        //下面的先执行
          //   // 抽离 css 为独立文件
          // MiniCssExtractPlugin.loader,
              {
                loader:"style-loader"  //把css添加到dom
              }, {
                loader:"css-loader"   //加载css
              }, {
                loader:"less-loader"  //加载less，less转css
              }
            ]
        }
      ]
    },

    // 插件
    plugins:[

      // new MiniCssExtractPlugin({
      //   // 对输出结果重命名
      //   filename: 'assets/css/[name].css'
      // }),

      new HtmlWebpackPlugin({            //一个插件HtmlWebpackPlugin
        filename:'research.html',        //要打包的文件名称 
        template:'./dist/research.html',  //要打包的文件路径
        chunks:['research']              // HtmlWebpackPlugin一定要配chunks，否则所有页面的js都会被注入到当前html里
      }),

      new HtmlWebpackPlugin({             
        filename:'index.html',
        template:'./dist/index.html',
        chunks:['index']                 
      }),

      new HtmlWebpackPlugin({
        filename:'song.html',
        template:'./dist/song.html',
        chunks:['song']
      }),

      new HtmlWebpackPlugin({
        filename:'songDetail.html',
        template:'./dist/songDetail.html',
        chunks:['songDetail']
      }),

      new HtmlWebpackPlugin({
        filename:'songList.html',
        template:'./dist/songList.html',
        chunks:['songList']
      }),
    ],
    optimization: {
      minimizer: [
        // 使用插件压缩 js 代码 (生产模式)
        new TerserWebpackPlugin()
      ]
    },
    devServer: {
        // 环境目录
        static: './dist',
        // 设置 gzip 压缩，提高传输效率
        compress: true,
        // 设置服务器主机
        host: 'localhost',
        // 设置端口号
        port: 7676,
        // 设置路由
        historyApiFallback: true,
        // 自动打开页面
        open: true,
        // 更改后自动更新
        watchFiles: {
          paths: [
            './*'
          ],
          options: {
            usePolling: false
          }
        },
        // 启用热加载功能
        liveReload: true,
        // 启用热模块功能
        hot: true
    }
}
