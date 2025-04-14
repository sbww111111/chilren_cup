<template>
  <view class="container">
    <!-- 黄色背景 -->
    <image class="background" src="/img/7.png" mode="widthFix"></image>
    
    <!-- 头像 -->
<!--    <image class="avatar" src="/static/avatar.png" mode="widthFix"></image>
    -->
    <!-- 按钮 -->
    <image 
      class="button" 
      src="/img/6.png" 
      mode="widthFix"
      @tap="handleNavigate"
    ></image>
  </view>
</template>

<script>
export default {
  methods: {
    handleNavigate() {
      // 这里添加跳转逻辑
      uni.reLaunch({
        url: '/pages/index/index'
      })
    }
  }
}
</script>

<style>
.container {
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #fff36a;
}

.background {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
}



.button {
  position: relative;
  margin-top: 400px;
  width: 500px; /* 根据实际需求调整大小 */
  left: 60%;
  bottom: 30%;
  transform: translateX(-50%);
  z-index: 2;
}
</style>