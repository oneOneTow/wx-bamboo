import config from './config'
import utils from './utils'

export function get(url, data) {
  return doExecute(url, 'GET', data)
}

export function post(url,data){
  return doExecute(url,"POST",data);
}

function doExecute(url, method, data) {
  console.log("http request start ......")
  var token = wx.getStorageSync("token")
  var header = {
    'content-type': 'application/json',
    'token': token
  }
  return new Promise((resolve, reject)=>{
    wx.request({
      data,
      method,
      header,
      url:config.host+url,
      success: function (res){
        if(0 === res.code){
          resolve(res.data)
        }else {
          utils.showModal("fail",res.data.msg)
          reject(res.data)
        }
      }
    })
  })
}


