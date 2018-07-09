/*ajax请求函数模块*/
import axios from 'axios'
const baseUrl='';
//url='http://localhost:4000'
export default function ajax(url='',data={},type='GET'){
    //返回一个新的promise函数
  return new Promise(function (resolve,reject){
    let promise; //初始化promise
    url = baseUrl + url;

    if(type==='GET'){//发送get请求
      // 拼请求参数串
      // data: {username: tom, password: 123}
      // paramStr: username=tom&password=123
      let paramStr='';
      Object.keys(data).forEach(key=>{
        paramStr+=key+'='+data[key]+'&'
      });
      if (paramStr!==''){
        paramStr='?'+paramStr.substring(0,paramStr.length-1);
        url=url+"?"+paramStr;
      }

      //使用axios发送get请求
      promise=axios.get(url + paramStr);
    }else{ //发送post请求
      //使用axios发送post请求
      promise=axios.post(url,data);
    }

    promise.then(res=>{//请求的成功返回
      resolve(res.data);
    })
      .catch(err=>{ //请求的失败返回
        reject(err);
      })
  })
}
/*
const response = await ajax('/xxx')
const result = response.data
*/
/*
ajax('/xxx').then(result => {})
const result = await ajax('/xxx')
*/
