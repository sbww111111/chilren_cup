<template>
	<view class="knowledge_container">
		<view class="search_bar">
			<view class="search_box">
				<view class="water_drop_img">
					<image class="water_drop_img" src="/static/knowledge/water_drop.png"></image>
				</view>
				<input type="text" placeholder="输入关键字" v-model="keyWord" />
			</view>
			<view class="search_btn">
				<button form-type="submit" @click="search()">搜索</button>
			</view>
		</view>
		<view class="knowledge_posts">
			<scroll-view class="knowledge_post_scroll" scroll-y="true">
				<view class="waterfall_container">
					<view class="knowledge_post_item" v-for="(item, index) in posts" :key="index">
						<view class="img_container">
							<image :src="item.postCoverUrl" mode="widthFix"></image>
						</view>
						<view class="knowledge_content">
							<view class="text">{{item.postTitle}}</view>
						</view>
					</view>
				</view>
				<!-- 空白占位 -->
				<view style="width: 100%; height: 130px;"></view>
			</scroll-view>
		</view>
		<CustomTabBar></CustomTabBar>
	</view>
</template>

<script>
	import CustomTabBar from '@/components/CustomTabBar.vue';
	export default {
		components: {
			CustomTabBar
		},
		data() {
			return {
				keyWord: "",
				posts: [{
						postTitle: "标题1 x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x ",
						postCoverUrl: "/static/knowledge/1.png",
						height: 0
					},
					{
						postTitle: "标题2 x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x ",
						postCoverUrl: "/static/knowledge/2.png",
						height: 0
					},
					{
						postTitle: "标题3 x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x ",
						postCoverUrl: "/static/knowledge/3.png",
						height: 0
					}, {
						postTitle: "标题4 x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x",
						postCoverUrl: "/static/knowledge/4.png",
						height: 0
					}, {
						postTitle: "标题5",
						postCoverUrl: "/static/knowledge/5.png",
						height: 0
					},
					{
						postTitle: "标题6",
						postCoverUrl: "/static/knowledge/6.png",
						height: 0
					},
					{
						postTitle: "标题7",
						postCoverUrl: "/static/knowledge/7.png",
						height: 0
					},
					{
						postTitle: "标题8",
						postCoverUrl: "/static/knowledge/8.png",
						height: 0
					}, {
						postTitle: "标题9",
						postCoverUrl: "/static/knowledge/9.png",
						height: 0
					}
				]
			}
		},
		methods: {
			search() {
				let keyWord = this.keyWord;
				console.log(keyWord);
			}
		}
	}
</script>

<style lang="scss">
	.knowledge_container {
		background-color: #fff77f;
	}

	.search_bar {
		padding: 40rpx 20rpx 40rpx 20rpx;
		width: calc(100vw - 2 * 20rpx);
		height: 60rpx;
		display: inline-flex;
		justify-content: space-between;
		// 保证搜索栏在最上边
		position: sticky;
		z-index: 1;
		top: 0;

		.search_box {
			border: #0f9fff solid 6rpx;
			padding: 10rpx;
			width: calc(70% - (2 * 10rpx) - (2 * 10rpx));
			border-radius: 40rpx;
			display: inline-flex;
			justify-content: space-around;
			// 垂直居中
			align-items: center;

			.water_drop_img {
				width: calc(5 * (60rpx - (2 * 10rpx) - 12rpx) / 6);
				height: 100%;

				image {
					width: 100%;
					height: 100%;
				}
			}

			input {
				width: calc(100% - 5 * (60rpx - (2 * 10rpx) - 12rpx) / 6 - 5%);
				font-size: calc(60rpx - (2 * 10rpx) - 12rpx);
				height: 100%;
			}
		}

		.search_btn {
			padding: 0 20rpx 0 20rpx;
			width: calc(30% - (2* 20rpx));
			height: 60rpx;

			button {
				display: inline-flex;
				align-items: center;
				justify-content: center;
				width: 100%;
				border: solid #0f9fff 6rpx;
				height: 100%;
				background-color: #fff77f;
				border-radius: 30rpx;
				font-size: calc(60rpx - (2 * 6rpx) - 5rpx);
				font-weight: 700;
				color: #0f9fff;
			}
		}
	}

	.knowledge_posts {
		margin: 0 20rpx 0 20rpx;
		width: calc(100vw - (2 * 20rpx));
		height: calc(100vh - 60rpx - (2 * 40rpx) - var(--window-top));
		background-color: #0f9fff;
		border-radius: 40rpx;

		.knowledge_post_scroll {
			padding-top: 20rpx;
			height: calc(100% - 20rpx);
			width: 100%;

			.waterfall_container {
				padding: 0 20rpx 0 20rpx;
				width: calc(100% - (2 * 20rpx));
				column-count: 2;

				.knowledge_post_item {
					margin-bottom: 8%;
					border-radius: 20rpx;
					background-color: #fffcd9;
					break-inside: avoid;

					.img_container {
						padding-top: 10rpx;
						text-align: center;

						image {
							width: calc(100% - (2 * 10rpx));
							border-radius: 20rpx;
						}
					}

					.knowledge_content {
						padding: 10rpx;

						.text {
							text-overflow: -o-ellipsis-lastline;
							overflow: hidden;
							text-overflow: ellipsis;
							display: -webkit-box;
							-webkit-line-clamp: 3;
							line-clamp: 2;
							-webkit-box-orient: vertical;
							font-size: 1.2em;
						}
					}
				}
			}
		}
	}
</style>