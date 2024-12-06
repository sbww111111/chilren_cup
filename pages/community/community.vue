<template>
	<view>
		<view class="join_us">
			<image src="../../static/community/quick_join_us.png"></image>
		</view>
		<view class="line"></view>
		<view class="share">
			<button @tap="goEdit">
				<image src="../../static/community/share.png"></image>
			</button>
		</view>
		<view class="comments">
			<scroll-view scroll-y="true" class="comments_scroll">
				<view class="comment_item" v-for="(item, index) in comments" :key="index">
					<view class="head_portrait">
						<image :src="item.head_portrait_url"></image>
					</view>
					<view class="comment_content" @click="goDetail">
						<text>{{item.comment}}</text>
					</view>
					<view class="like">
						<image src="../../static/community/like_blank.png"></image>
					</view>
					<view class="reply" @click="goDetail">
						<image src="../../static/community/comments.png"></image>
					</view>
				</view>
				<view class="comment_item" style="width: 100%; height: 100px;"></view>
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
				comments: [{
						head_portrait_url: "../../static/icons/logo.png",
						comment: "hello world"
					},
					{
						head_portrait_url: "../../static/icons/logo.png",
						comment: "hello world"
					},
					{
						head_portrait_url: "../../static/icons/logo.png",
						comment: "hello world"
					},
					{
						head_portrait_url: "../../static/icons/logo.png",
						comment: "hello world"
					},
					{
						head_portrait_url: "../../static/icons/logo.png",
						comment: "hello world"
					},
					{
						head_portrait_url: "../../static/icons/logo.png",
						comment: "hello world"
					},
					{
						head_portrait_url: "../../static/icons/logo.png",
						comment: "hello world"
					}
				]

			}
		},
		methods: {
			goEdit() {
				uni.navigateTo({
					url: "/pages/release_post/release_post"
				});
			},
			goDetail() {
				uni.navigateTo({
					url: "/pages/post_detail/post_detail"
				})
			}
		}
	}
</script>

<style lang="scss">
	.join_us {
		padding: 2%;
		height: 150px;
		background-color: #fff77f;

		image {
			width: 100%;
			height: 100%;
		}
	}

	.line {
		background-color: #fff77f;
		border-bottom: solid 6px #73adff;
		border-radius: 20rpx;
	}

	.share {
		padding-left: 23%;
		padding-right: 23%;
		padding-top: 3%;
		background-color: #fff77f;

		button {
			border-radius: 15px;
			box-shadow: 0 4px #b9b288;
			text-align: center;
			height: 27px;
			line-height: 39px;

			image {
				height: 25px;
				width: 70%;
			}
		}
	}

	.comments {
		height: calc(100vh - 300px);
		padding-top: 3%;
		padding-left: 1%;
		padding-right: 1%;
		background-color: #fff77f;

		.comments_scroll {
			height: 100%;

			.comment_item {
				height: 40%;
				position: relative;

				.head_portrait {
					width: 50px;
					height: 50px;
					border: solid 0;
					border-radius: 50%;
					background-color: #73adff;
					position: absolute;
					top: 2%;
					left: 2%;

					image {
						width: 100%;
						height: 100%;
					}
				}

				.comment_content {
					width: calc(100% - 70px);
					height: calc(100% - 60px);
					background-color: white;
					border: solid 0;
					border-radius: 20px;
					position: absolute;
					top: 2%;
					left: calc(100vw - 85%);

					text {
						padding: 5%;
					}
				}

				.like {
					image {
						width: 45px;
						height: 40px;
					}

					position: absolute;
					bottom: 0;
					left: calc(100vw - 82%);
				}

				.reply {
					image {
						width: 45px;
						height: 40px;
					}

					position: absolute;
					bottom: 0;
					left: calc(100vw - 82% + 60px);
				}
			}
		}
	}
</style>