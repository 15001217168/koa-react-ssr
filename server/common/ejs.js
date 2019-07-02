import  ejs from 'ejs';

module.exports  = {
    renderFile:async (file)=>{
        return new Promise(resolve=>{
            ejs.renderFile(file, {}, {}, function (err, str) {
                // str => 输出绘制后的 HTML 字符串
                console.log(err);
                resolve(str);
            });
        })
    
    }
}
