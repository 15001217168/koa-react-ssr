//src/client/pages/index/index.js
//index 组件

import React from 'react';

//组件
export default class Index extends React.Component {
    constructor(props) {
        super(props);
    }
    handlerClick(){
        alert('一起来玩 react 服务端渲染呗');
    }

    render() {
        const str='click here!1122';
        return <div onClick={this.handlerClick}>{str}</div>
    }
}