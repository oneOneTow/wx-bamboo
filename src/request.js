import config from './config'
import utils from './utils'

export function get(url, data) {
  return doExecute(url, 'GET', data)
}

function doExecute(url, method, header = {}) {
  return new Promise((resolve, reject)=>{
    wx.request({
      data,
      method,
      header,
      url:config.host+url,
      success: function (res){
        if(0 === res.code){
          resolve(res.data.data)
        }else {
          utils.showModal("fail",res.data.data.msg)
        }
      }
    })
  })
}

