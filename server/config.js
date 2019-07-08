/**
 * 系统配置
 */


module.exports = {
    appPort: '8808', //默认服务端口号
    isDev:process.env.NODE_ENV!=='production',
    db:{
        host: 'localhost',
        user: 'root',
        password: '123',
        database: 'circle-parts-db'
    }
}