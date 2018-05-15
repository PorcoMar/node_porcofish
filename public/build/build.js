// https://github.com/shelljs/shelljs
require('./check-versions')()
require('shelljs/global')
env.NODE_ENV = 'production'

var path = require('path')
var config = require('../config')
var ora = require('ora') //用来清除之前打的包，vue-cli    每次都会产生不同的hash,生成新文件，应该覆盖原先的文件，因为hash覆盖不了，所以要清除
var webpack = require('webpack')
var webpackConfig = require('./webpack.prod.conf')

console.log(
  '  Tip:\n' +
  '  Built files are meant to be served over an HTTP server.\n' +
  '  Opening index.html over file:// won\'t work.\n'
)

var spinner = ora('building for production...')
spinner.start()

var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)
rm('-rf', assetsPath) //删除路径
mkdir('-p', assetsPath)
cp('-R', 'static/*', assetsPath)

webpack(webpackConfig, function (err, stats) {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true, //让打包时有颜色
    modules: false, //去掉内置模块信息
    children: false, //去掉子模块
    chunks: false,//增加包信息（false能允许较少的冗长输出）
    chunkModules: false//去掉包里的内置模块信息
  }) + '\n')
})
