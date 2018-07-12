/*使用mockjs模拟数据接口*/
import Mock from 'mockjs'
import data from './data.json' //引入时会自动解析成js对象

/*以下接口只要执行（引入到main.js文件里面）过一次，以后的ajax就会请求这里的路径*/
//获取goods的接口
Mock.mock('/goods',{code:0,data:data.goods});

//获取tarings的接口
Mock.mock('/ratings',{code:0,data:data.ratings});

//获取info的接口
Mock.mock('/info',{code:0,data:data.info});

