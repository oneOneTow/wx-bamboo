<script>
import config from './config'
import request from './request'
export default {
  created () {
      let token = wx.getStorageSync('token')
      if(!token){
          wx.login({
                    success(res){
                      if(res.code){
                        var data = request.get("auth/account/mp/login",res.code)
                        wx.setStorageSync('token',token)
                      }else{
                        console.log("fail login!!")
                      }
                    }
                })
      }
      console.log("bamboo up up ....");
  }
}
</script>

<style>

</style>
