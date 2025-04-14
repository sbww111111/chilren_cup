<template>
	<view class="container">
		<!-- 大图 -->
		<view class="join_us">
			<image src="/static/community/quick_join_us.png"></image>
		</view>
		<!-- 分割线 -->
		<view class="line"></view>
		<!-- 发帖按钮 -->
		<view class="share">
			<button @tap="goEdit">
				<image src="/static/community/share.png"></image>
			</button>
		</view>
		<!-- 帖子 -->
		<view class="posts">
			<scroll-view scroll-y="true" class="posts_scroll">
				<view class="post_item" v-for="(item, index) in posts" :key="index">
					<view class="post_info">
						<view class="head_portrait">
							<image :src="item.head_portrait_url"></image>
						</view>
						<view class="post_content">
							<view v-if="item.post.title != null && item.post.title.length > 0" class="title" @click="goDetail()">
								{{item.post.title}}
							</view>
							<view v-if="item.post.title != null && item.post.title.length > 0" class="line" @click="goDetail()">
							</view>
							<view class="content" @click="goDetail()">
								{{item.post.content}}
							</view>
							<view class="img_list">
								<view class="img" v-if="item.post.imgList.length > 0" v-for="(img, idx) in item.post.imgList"
									:key="idx">
									<image v-if="idx != 2" :src="img" @click="previewImage(item, idx)"></image>
									<!-- 多余部分用省略号代替 -->
									<view v-if="idx == 2" class="omit" @click="goDetail()">
										<view class="circle"></view>
										<view class="circle"></view>
										<view class="circle"></view>
									</view>
								</view>
							</view>
						</view>
					</view>
					<view class="option_buttons">
						<view class="like" @click="item.like = !item.like">
							<image v-if="!item.like" src="/static/community/like_white.png"></image>
							<image v-if="item.like" src="/static/community/like_red.png"></image>
						</view>
						<view class="comment" @click="showComments()">
							<image src="/static/community/comments.png"></image>
						</view>
					</view>
				</view>
				<view class="comment_item" style="width: 100%; height: 100px;"></view>
			</scroll-view>
		</view>
		<!-- 弹出层 -->
		<uni-popup class="popup_box" ref="popup" type="bottom" border-radius="10px 10px 0 0">
			<view class="popup">
				<view class="title">评论</view>
				<view class="line"></view>
				<scroll-view scroll-y="true" class="comment_list">
					<view class="comment" v-if="commentList.length > 0" v-for="(item, index) in commentList" :key="index">
						<view class="head_portrait">
							<image :src="item.user.headPortrait"></image>
						</view>
						<view class="content">
							{{item.content}}
						</view>
					</view>
					<!-- 空白占位 -->
					<view v-if="commentList.length > 0" style="width: 100%; height: 160px;"></view>
					<view class="no_comment" v-if="commentList.length == 0">
						暂无评论
					</view>
				</scroll-view>
			</view>
		</uni-popup>
		<!-- 导航栏 -->
		<CustomTabBar></CustomTabBar>
	</view>
</template>

<script>
	import uniPopup from '@/uni_modules/uni-popup/components/uni-popup/uni-popup.vue';
	import CustomTabBar from '@/components/CustomTabBar.vue';
	export default {
		components: {
			CustomTabBar,
			uniPopup
		},
		data() {
			return {
				posts: [{
						head_portrait_url: "../../static/icons/logo.png",
						post: {
							title: "Title x X x X x X x X x X x X x X x X x X x X x X x X x X x X x X x X x X x X x X x X x X",
							content: "a bb ccc d ee fff g hh iii j kk lll m nn ooo p qq rrr s tt uuu v ww xxx y zz aaa b cc ddd e ff ggg h ii jjj k ll mmm n oo ppp q rr sss t uu vvv w xx yyy z aa bbb c dd eee f gg hhh i jj kkk l mm nnn o pp qqq r ss ttt u vv www x yy zzz a bb ccc d ee fff g hh iii j kk lll m nn ooo p qq rrr s tt uuu v ww xxx y zz aaa b cc ddd e ff ggg h ii jjj k ll mmm n oo ppp q rr sss t uu vvv w xx yyy z aa bbb c dd eee f gg hhh i jj kkk l mm nnn o pp qqq r ss ttt u vv www x yy zzz",
							imgList: ["/static/community/nums/1.png", "/static/community/nums/2.png",
								"/static/community/nums/3.png", "/static/community/nums/4.png"
							]
						},
						like: false
					},
					{
						head_portrait_url: "../../static/icons/logo.png",
						post: {
							title: "Title",
							content: "Hello Wrold!",
							imgList: ["/static/community/nums/5.png", "/static/community/nums/6.png"]
						},
						like: false
					},
					{
						head_portrait_url: "../../static/icons/logo.png",
						post: {
							title: null,
							content: "Hello Wrold!",
							imgList: ["/static/community/nums/3.png", "/static/community/nums/7.png"]
						},
						like: false
					},
					{
						head_portrait_url: "../../static/icons/logo.png",
						post: {
							title: "Title",
							content: "Hello Wrold!",
							imgList: ["/static/community/nums/4.png"]
						},
						like: false
					},
					{
						head_portrait_url: "../../static/icons/logo.png",
						post: {
							title: "",
							content: "Hello Wrold!",
							imgList: ["/static/community/nums/5.png"]
						},
						like: false
					},
					{
						head_portrait_url: "../../static/icons/logo.png",
						post: {
							title: "Title",
							content: "Hello Wrold!",
							imgList: []
						},
						like: false
					},
					{
						head_portrait_url: "../../static/icons/logo.png",
						post: {
							title: "Title",
							content: "Hello Wrold!",
							imgList: ["/static/community/nums/3.png", "/static/community/nums/6.png",
								"/static/community/nums/1.png", "/static/community/nums/4.png"
							]
						},
						like: false
					}
				],
				commentList: [{
						user: {
							uid: "2345",
							username: "张三",
							headPortrait: "/static/icons/logo.png"
						},
						commentTime: Date.now(),
						content: "好好看啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊"
					},
					{
						user: {
							uid: "2345",
							username: "张三",
							headPortrait: "/static/icons/logo.png"
						},
						commentTime: Date.now(),
						content: "好喜欢好喜欢好喜欢好喜欢好喜欢好喜欢好喜欢好喜欢好喜欢好喜欢好喜欢好喜欢好喜欢"
					},
					{
						user: {
							uid: "2345",
							username: "张三",
							headPortrait: "/static/icons/logo.png"
						},
						commentTime: Date.now(),
						content: "啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊"
					},
					{
						user: {
							uid: "2345",
							username: "张三",
							headPortrait: "/static/icons/logo.png"
						},
						commentTime: Date.now(),
						content: "好可爱好可爱好可爱好可爱好可爱好可爱好可爱好可爱好可爱好可爱好可爱好可爱好可爱好可爱"
					},
					{
						user: {
							uid: "2345",
							username: "张三",
							headPortrait: "/static/icons/logo.png"
						},
						commentTime: Date.now(),
						content: "好可爱好可爱好可爱好可爱好可爱好可爱好可爱好可爱好可爱好可爱好可爱好可爱好可爱好可爱"
					}
				]
			}
		},
		onLoad() {
			let posts = this.posts;
			for (let i = 0; i < posts.length; i++) {
				while (posts[i].post.imgList.length > 3) {
					posts[i].post.imgList.pop();
				}
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
			},
			showComments() {
				this.$refs.popup.open()
			},
			previewImage(item, idx) {
				let src = item.post.imgList;
				uni.previewImage({
					current: idx,
					urls: src
				})
			}

		}
	}
</script>

<style lang="scss">
	.container {
		background-color: #fff77f;
	}

	.join_us {
		height: 20vh;
		background-color: #fff77f;

		image {
			width: 100%;
			height: 100%;
		}
	}

	.line {
		margin: 10rpx 0 10rpx 0;
		background-color: #fff77f;
		border-bottom: solid 6px #73adff;
		border-radius: 20rpx;
	}

	.share {
		display: flex;
		justify-content: space-around;

		button {
			width: 60%;
			height: 50rpx;
			line-height: 75rpx;
			border-radius: 40rpx;
			box-shadow: 0 4px #b9b288;

			image {
				height: 90%;
				width: 80%;
			}
		}
	}

	.posts {
		height: calc(100vh - 20vh - 20rpx - 6px - 50rpx - 150rpx); // 减去大图、横线、分享按钮、头部
		padding: 20rpx 10rpx 0 10rpx;
		background-color: #fff77f;

		.posts_scroll {
			height: 100%;
			width: 100%;

			.post_item {
				width: 100%;
				margin-bottom: 40rpx;

				.post_info {
					display: flex;
					justify-content: space-between;

					.head_portrait {
						width: calc((100vw - 10rpx) / 10);
						height: calc((100vw - 10rpx) / 10);

						image {
							width: 100%;
							height: 100%;
							border-radius: 50%;
						}
					}

					.post_content {
						padding: 20rpx 20rpx 40rpx 20rpx;
						width: calc(9 * (100vw - 10rpx) / 10 - 40rpx - 20rpx);
						border-radius: 40rpx;
						background-color: #ffffff;

						.title {
							// 将元素设置为一个块级伸缩盒子对象
							display: -webkit-box;
							// 设置伸缩盒子的子元素的排列方式为垂直方向
							-webkit-box-orient: vertical;
							// 限制在一个块元素显示的文本的行数
							-webkit-line-clamp: 1;
							// 隐藏超出容器的内容。
							overflow: hidden;
							// 当文本溢出时显示省略号
							text-overflow: ellipsis;
						}

						.line {
							border: 2rpx solid #e6e6e6;
						}

						.content {
							// 将元素设置为一个块级伸缩盒子对象
							display: -webkit-box;
							// 设置伸缩盒子的子元素的排列方式为垂直方向
							-webkit-box-orient: vertical;
							// 限制在一个块元素显示的文本的行数
							-webkit-line-clamp: 3;
							// 隐藏超出容器的内容。
							overflow: hidden;
							// 当文本溢出时显示省略号
							text-overflow: ellipsis;
						}

						.img_list {
							width: 100%;
							display: inline-flex;
							flex-wrap: wrap;
							// justify-content: space-around;

							.img {
								border-radius: 20rpx;
								margin: 10rpx 10rpx 10rpx 10rpx;
								height: calc((100vw - ((100vw - 10rpx) / 10) - 40rpx - 110rpx) / 3);
								width: calc((100vw - ((100vw - 10rpx) / 10) - 40rpx - 110rpx) / 3);

								image {
									border-radius: 20rpx;
									width: 100%;
									height: 100%;
								}

								.omit {
									border-radius: 20rpx;
									padding: 20rpx;
									width: calc(100% - (2 * 20rpx));
									height: calc(100% - (2 * 20rpx));
									background-color: #dde8fe;
									display: flex;
									align-items: center;
									justify-content: space-around;

									.circle {
										border-radius: 50%;
										height: calc(50% / 3);
										width: calc(50% / 3);
										background-color: #ffffff;
									}
								}
							}
						}

					}
				}

				.option_buttons {
					display: flex;
					padding-left: calc((100vw - 10rpx) / 10 + 20rpx);

					.like {
						width: 12vw;
						height: 12vw;

						image {
							width: 100%;
							height: 100%;
						}
					}

					.comment {
						width: 12vw;
						height: 12vw;

						image {
							width: 100%;
							height: 100%;
						}
					}
				}
			}
		}
	}

	.popup_box {
		.popup {
			padding: 0;
			background-color: #dde8fe;
			width: 100vw;
			height: 60vh;
			border-radius: 50rpx;

			.title {
				display: flex;
				justify-content: space-around;
				padding: 10rpx 0 20rpx 0;
				font-size: 20px;
			}

			.line {
				margin: 0 3% 3% 3%;
				display: flex;
				border: 6rpx solid #fcfcfe;
				width: 94%;
			}

			.comment_list {
				width: 100%;
				height: 95%;

				.comment {
					width: 100%;
					padding: 20rpx;
					display: inline-flex;

					.head_portrait {
						width: calc(10vw);
						height: calc(10vw);

						image {
							width: 100%;
							height: 100%;
							border-radius: 50%;
							background-color: #fcfcfe;
						}
					}

					.content {
						margin: 0 10rpx 0 10rpx;
						padding: 10rpx 20rpx 10rpx 20rpx;
						width: calc(90vw - 40rpx - 20rpx - 40rpx);
						border-radius: 40rpx;
						font-size: 20px;
						background-color: #fff77f;
					}
				}

				.no_comment {
					width: 100%;
					padding-top: 20%;
					display: inline-flex;
					color: #9d9d9d;
					justify-content: space-around;
				}
			}
		}
	}
</style>