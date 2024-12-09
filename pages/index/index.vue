<template>
	<view class="custom-nav-bar">
	  <!-- <text class="custom-title">首页</text> -->
	</view>
  <view class="container">
    <!-- 页面内容 -->
    <view class="page-content">欢迎来到首页</view>
    <!-- 自定义底部导航栏 -->
    <CustomTabBar></CustomTabBar>
  </view>
</template>、

<script>
	import CustomTabBar from '@/components/CustomTabBar.vue';

	export default {
	  components: {
		CustomTabBar
	  }
	};
	
</script>
<style>
	.custom-nav-bar {
	  width: 100%;
	  height: 95px;
	  background-color: #c3d1ec;
	  display: flex;
	  justify-content: center;  /* 让子元素水平居中 */
	  align-items: center;  /* 让子元素垂直居中 */
	  position: relative;
	}
	
	.custom-title {
	  color: #000000;
	  font-size: 18px;
	  
	}
	
	
	.container {
	  padding-top: 10px;  /* 留出空间给自定义导航栏 */
	}

</style>
