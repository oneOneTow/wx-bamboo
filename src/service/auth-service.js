import { login, fetchUser } from "../api/auth"

export function doLogin() {
    var token = wx.getStorageSync("token")
    console.log("login ...")
    if (!token) {
        wx.login({
            success(res) {
                console.log("code" + res.code)
                if (res.code) {
                    let permise = login(res.code)
                    permise.then(function (res) {
                        console.log("token:" + data.token)
                        wx.setStorageSync({
                            key: "token",
                            data: data.token
                        })
                    }).catch(function (res) {
                        console.log("获取token失败.......")
                    })

                }
            }
        })
    }

}
