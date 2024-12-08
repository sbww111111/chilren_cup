<script lang="js">
	import CustomTabBar from '@/components/CustomTabBar.vue';
	
	export default {
		methods: {
		  toNavigate(url) {
		    uni.redirectTo({
		      url
		    });
		  }
		},
	  components: {
		CustomTabBar
	  }
	};
</script>

<template>
	<view class="header">
	<scroll-view class="scrollarea" scroll-y type="list">
	  <view class="container">
	      <!-- 实际内容 -->
	      <view class="content">
        <view class="user-info">
          <view class="title">小水宝</view>
          <image class="vatar" src="/img/4.png" mode="aspectFill" bind:longpress="chooseImage" bind:tap="previewImage"/>
        </view>
	      </view>
	  </view>
	</scroll-view>
	<view class='order-list'>
					<view class='order-item' @click="toNavigate('/pages/index/index')">
										<image  class='order-img' src="/img/2.png" mode=""></image>
										<text class="txt">我发布的</text>
									</view>
									<view class='order-item' @click="toNavigate('/pages/index/index')">
										<image  class='order-img' src="/img/3.png" mode=""></image>
										<text class="txt">我的收藏</text>
									</view>
				</view>
	</view>
	<view class="low">
	<CustomTabBar></CustomTabBar>
	</view>
	
</template>






<style>
	.user-info {
	  display: flex;
	  align-items: center;
	  margin-bottom: 16px;
	  justify-content: space-between; /* 将内容分散对齐 */
	}
	.txt{
		font-size: 10px;
		font-weight: bold;
		color: rgb(131, 178, 249);
	}
	.vatar{
	  width: 100px;
	  height: 100px;
	  border-radius: 50%;
	  margin-top: 30px;
	  margin-left: 30px; /* 改为左边距 */
	  margin-right: 30px; /* 移除右边距 */
	}
	
	.order-img{
		border-radius: 30%;
	}

	.title {
	  font-size: 25px;
	  margin-left: 70px;
	  font-weight: bold;
	  color: rgb(70, 185, 214);
	}

	.header{
	  background-color: rgb(184, 208, 252);
	  height: 190px;
	}

	.low{
	  background-color: rgb(221, 232, 255);
	  width: 1000px;
	  height: 500px;
	}
	.order-list{
		padding: 20rpx;
	  display: flex;
	}
	.order-item{
	  margin: 5px;
		display: flex;
		flex-direction: column;
	  justify-content: center;
	  margin-top: 2px;
	}
	.order-img{
		width:70rpx;
		height: 70rpx;
	}
	.vatar {
	  width: 150rpx;
	  height: 150rpx;
	  border-radius: 50%;
	}

</style>