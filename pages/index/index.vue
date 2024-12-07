<template>
	<view class="bcground">
		<view class="uni-margin-wrap">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
				:duration="duration">
				<swiper-item>
					<view class="swiper-item uni-bg-red">
						<image src="/static/index/轮播图1.jpg" style="height: 100%; width: 100%;"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<image src="/static/index/轮播图2.jpg" style="height: 100%; width: 100%;"></image>
				</swiper-item>
				<swiper-item>
					<image src="/static/index/轮播图3.jpg" style="height: 100%; width: 100%;"></image>
				</swiper-item>
			</swiper>
		</view>
		<view style="height:calc(80vh - 7% - 240rpx) ; display: flex;">
			<view style="height: 100%;width: 60vw; position: relative;">
				<view class="dianchi">
					<image src="/static/index/battery-0.png" style="height: 100%; width: 40%;position: absolute; left: 33%;"></image>
					<text class="dianliang">{{dian}}</text>
				</view>
				<view class="shuibei">
					<image src="/static/index/shuibei.png" style="height: 100%; width: 100%;"></image>
				</view>
				
			</view>


			<view class="shuiliang">
				<view style="width: 70%; height: 90%; padding-top: 10%;position: relative;" class="dianchizu">
					<image src="../../static/index/shuikuang.png"
						style="width: 100%;height: 90%;position: absolute; z-index: 2;"></image>
					<image src="../../static/index/shuitiao.png"
						style="width: 50%; height: 87%;position: absolute; left: 35%; top: 5%;z-index: 3;"></image>
					<view class="menban" :style="{height : 9 + shuiliang1 + '%'}"></view>
					<image class="shuidi" src="../../static/index/shuidi.png" :style="{top:4 + shuiliang1 + '%'}"></image>
				</view>

			</view>

		</view>
		<!-- 自定义底部导航栏 -->
		<CustomTabBar></CustomTabBar>
	</view>
</template>、

<script>
	import CustomTabBar from '@/components/CustomTabBar.vue';

	export default {
		components: {
			CustomTabBar
		},
		data() {
			return {
				background: ['red', 'blue', 'green'],
				indicatorDots: true,
				autoplay: false,
				interval: 2000,
				duration: 500,
				dian: 100,
				shuiliang1: 20,
				//73 就是100
				
			}
		}
	};
</script>

<style>
	.bcground {
		background-color: #c3d1ec;
		width: 100%;
		height: 100%;
		position: absolute;

	}

	.uni-margin-wrap {
		width: auto;
		padding-top: 7vh;
	}

	.swiper {
		height: 240rpx;
		width: 90%;
		/* display: block; */
		text-align: center;
		border: 8px solid #627fb4;
		margin-left: 3vw;
		border-radius: 8px;
	}

	.swiper-item {
		display: block;
		height: 240rpx;
		line-height: 240rpx;
		text-align: center;
	}

	.shuibei {
		width: 65%;
		height: 50%;
		padding-top: 40%;
		padding-left: 7%;
	}

	.dianchi {
		position: relative;
		width: 100%;
		height: 16%;
		top: 15%;
		
	}

	.dianliang {
		z-index: 2;
		font-size:1.5rem;
		color: white;
		font-weight: bold;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		width: 100%;
		height: 100%;
	}

	.shuiliang {
		width: 40vw;
		height: calc(80vh - 7% - 240rpx);
		position: relative;
	}

	.menban {
		position: absolute;
		width: 35%;
		height: 10%;
		background-color: #c3d1ec;
		z-index: 4;
		left: 40.9%;
		top: 7%;
		border-radius: 35px;
	}

	.shuidi {
		width: 58%;
		height: 13%;
		position: absolute;
		z-index: 4;
		left: 30%;
	}
</style>