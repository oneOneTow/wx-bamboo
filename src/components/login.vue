<template>
  <div class="container">
    <div class="loginText">用户未授权，请点击授权按钮进行授权</div>
    <button
      open-type="getUserInfo"
      lang="zh_CN"
      withCredentials="true"
      @getuserinfo="fetchUserInfo"
      class="loginBut"
    >授权登录</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    fetchUserInfo(data) {
      console.log("user info nickname：" + data.mp.detail.userInfo.nickName);
      wx.setStorageSync({ key: "userData", value: data.mp.detail });
    }
  }
};
</script>


<style lang = 'scss'>
.container {
  padding: 0 30rpx;
}
.loginText {
  text-align: center;
  color: grey;
}
.loginBut {
  width: 300rpx;
  margin-top: 100rpx;
  text-align: center;
  border-radius: 5%;
}
</style>
