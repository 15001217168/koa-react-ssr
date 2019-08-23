const path = require('path');

//开发环境中
const devClientAppPort=8809;

module.exports = {
    devStaticResourceHost: process.env.LocalIP ? `http://${process.env.LocalIP}:${devClientAppPort}/` :`http://localhost:${devClientAppPort}/`,
    devWdsPort: devClientAppPort, //单页应用访问入口 端口 
    appClientSrc: path.resolve(__dirname, '../src'),//fe code
    appServerSrc: path.resolve(__dirname, '../server'),//node server code
    appClientRouter: path.resolve(__dirname, '../src/routes'),
    appClientPages: path.resolve(__dirname, '../src/page'),
    routeIndexFolderName: 'index', //路由首页的文件夹声明 /page/index 首页路由会排在入口 list 的第一个位置
    //TODO:打包到生产环境的时候这个地址会随机的进行分配 可能导致分配不均
    staticAssetsCdnHost:[
        '//c1.static.xin.com/',
        '//c2.static.xin.com/',
        '//c3.static.xin.com/'
    ]
}