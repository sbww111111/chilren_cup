<template>
	<view>
		<view class="edit_box">
			<!-- 图片 -->
			<view class="img_list_box">
				<view v-for="(img, index) in imgList" :key="index">
					<view class="img_box">
						<image class="img" :src="img" mode="aspectFill"></image>
						<image class="remove_icon" src="/static/community/delete.png" @click.stop="removeImg(index)"></image>
					</view>
				</view>
				<view v-if="imgList.length < 9" class="upload_img" @click="chooseImg()">
					+
				</view>
			</view>
			<!-- 标题 -->
			<input class="title" type="text" v-model="title" placeholder="输入标题(可选)" :maxlength="20">
			<!-- 分隔线 -->
			<view class="line"></view>
			<!-- 正文 -->
			<textarea class="content" v-model="content" auto-height :show-confirm-bar="false"
				:cursor-spacing="50" placeholder="添加正文" :maxlength="9999"></textarea>
		</view>
		<!-- 发布 -->
		<view class="release">
			<button @click="releasePost()">发布帖子</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '', 		// 标题
				content: '', 	// 正文
				imgList: [], 	// 图片列表
			}
		},
		methods: {
			removeImg(index) {
				this.imgList.splice(index, 1);
			},
			chooseImg() {
				let images = this.imgList;
				uni.chooseImage({
					count: 9, 								// 最多可以选择的图片张数，默认9
					sizeType: ['compressed'],	// 指定是原图还是压缩图，默认二者都有，这里选择压缩图
					sourceType: ['album'],		// 从相册选择
					success: function (res) {
						let files = res.tempFiles;
						let fileMaxSize = 2 * 1024 * 1024; 		// 2MB = 2 * 1024 * 1024 B
						for (let i = 0; i < files.length; i++) {
							if (files[i].size > fileMaxSize) { 	// 图片过大
								console.log("图片过大!");
							} else {
								images.push(files[i].path);
							}
						}
					}
				})
			},
			releasePost() {
				let post = {
					uid: "123456",
					author: "zhangsan",
					postTime: Date.now(),
					title: this.title,
					content: this.content,
					imgList: this.imgList
				}
				console.log(post);
			}
		}
	}
</script>

<style lang="scss">
.edit_box {
	padding: 10rpx 20rpx 20rpx;
	.img_list_box {
		width: 100%;
		display: inline-flex;
		flex-wrap: wrap;
		.img_box {
			position: relative;
			border-radius: 20rpx;
			margin: 10rpx 10rpx 0 0;
			height: calc((100vw - 40rpx - 30rpx) / 3);
			width: calc((100vw - 40rpx - 30rpx) / 3);
			.remove_icon {
				position: absolute;
				height: 50rpx;
				width: 50rpx;
				top: -10rpx;
				right: -10rpx;
				border-radius: 50%;
				opacity: 0.8;
			}
		}
		.img {
			border-radius: 20rpx;
			height: 100%;
			width: 100%;
		}
		.upload_img {
			@extend .img_box;
			background-color: #eee;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 80rpx;
			color: #5e5e5e;
		}
		
	}
	.title {
		height: 80rpx;
		font-size: 40rpx;
	}
	.line {
		border: 2rpx #eee solid;
		margin: 20rpx 0;
	}
	.content {
		min-height: 400rpx;
		width: 100%;
	}
}
.release {
	position: fixed;
	display: inline-flex;
	align-items: center;
	width: 100%;
	box-sizing: border-box;
	background-color: #f7f7f7;
	box-shadow: -4rpx -4rpx 12rpx -4rpx rgb(238, 238, 238);
	bottom: 0;
	padding: 20rpx 30rpx;
	button {
		flex: 1;
		border-radius: 100rpx;
		background-color: #55aaff;
		color: #fff;
	}
}
</style>
