/**
 * 根据 url 查找组件
 */

import {
    matchRoutes
} from 'react-router-config';
import Routes from '../../../src/routes/routes-config';
import config from '../../config';

/**
 * 目前只会返回查找到的第一个组件，其他组件不会返回。
 * return {
 * component,match
 *  }
 */

export default async (url) => {

    console.log('base routes');
    console.log(Routes());
    const routes = matchRoutes(Routes(), url);
    let len =routes.length,i=0,
    matchC={};

    for(;i<len;i++){
        let {route,match} = routes[i];
        if (match.url === url) {//匹配到
            console.log('match route', route);
            console.log('match match', match);// 这里是什么意思呢

            const component = route.component;

            //查找组件  同步组件
            if(config.isComponentLazyLoad){
                //异步组件的查找
                console.log(component);
                matchC.component=(await component({match}).props.load()).default;
                matchC.match=match;

                    //这种写法也可以 
                    // component(match).props.load().then((C => {
                    //     console.log(C.default.fetchData());
                    // }));
            }else{
                matchC.component = component;
                matchC.match = match;
            }

            break;
        }
    }

    return matchC;

}