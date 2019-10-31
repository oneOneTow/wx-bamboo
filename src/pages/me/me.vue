<template>
  <div class="container">
    <div class="userInfo" @click="login">
      <img :src="userInfo.avatarUrl" alt />
      <div v-if="userInfo.nickName==='点击登录'">
        <button
          open-type="getUserInfo"
          lang="zh_CN"
          withCredentials="true"
          @getuserinfo="fetchUserInfo"
          class="loginBut"
        >授权登录</button>
      </div>
      <div v-else class="nickName">{{userInfo.nickName}}</div>
    </div>
  </div>
</template>

<script>
import config from "../../config";
import { doLogin, doFetchUser } from "../../service/auth-service";

export default {
  components: {},

  data() {
    return {
      userInfo: {
        avatarUrl: "/static/img/noLogin.png",
        nickName: "点击登录"
      }
    };
  },

  methods: {
    fetchUserInfo(data) {
      this.userInfo = data.mp.detail.userInfo;
      console.log("user info nickname：" + data.mp.detail.userInfo.nickName);
      wx.setStorageSync({ key: "userData", value: data.mp.detail });
      //执行操作
      doLogin();
      console.log("fetch end .....")
    }
  },

  created() {}
};
</script>

<style lang = 'scss'>
.container {
  padding: 0 30rpx;
}
.userInfo {
  margin-top: 100rpx;
  text-align: center;
  img {
    width: 180rpx;
    height: 180rpx;
    margin: 20rpx;
    border-radius: 50%;
  }
}
</style>
