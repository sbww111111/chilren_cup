<template>
  <view class="container">
    <!-- 页面内容 -->
    <view class="page-content">欢迎来到首页</view>
    <!-- 自定义底部导航栏 -->
    <CustomTabBar></CustomTabBar>
  </view>
</template>

<script>
	import CustomTabBar from '@/components/CustomTabBar.vue';

	export default {
	  components: {
		CustomTabBar
	  }
	};
</script>
