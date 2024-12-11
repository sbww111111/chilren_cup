<template>
	<view>
		<!-- 推文 -->
		<view class="post_box">
			<!-- 文章信息栏 -->
			<view class="author_info_box">
				<!-- 作者头像 -->
				<view class="left_box author_headPortrait">
					<image :src="post.author.headPortrait"></image>
				</view>
				<view class="right_box">
					<!-- 作者昵称 -->
					<view class="author_name">{{post.author.username}}</view>
					<!-- 发布时间 -->
					<view class="publish_time">发布于：{{formatTimestamp(post.publishTime)}}</view>
				</view>
			</view>
			<!-- 文章标题 -->
			<view class="post_title_box">{{post.title}}</view>
			<!-- 分隔线 -->
			<view class="line"></view>
			<!-- 文章内容 -->
			<view class="post_content_box">
				<view>{{post.content}}</view>
			</view>
			<!-- 文章图片 -->
			<view class="img_list_box" v-if="post.imgList.length > 0">
				<view class="img_box" v-for="(img, index) in post.imgList" :key="index">
					<image class="img" :src="img" mode="aspectFill" @click="previewImage(index)"></image>
				</view>
			</view>
		</view>
		<!-- 评论筛选、排序 -->
		<view class="select_bar_box">
			<!-- 筛选 -->
			<view class="select_comments">
				<view class="all_comments active" @click="allComments()">全部回复 ({{post.commentCount}})</view>
				<view class="only_author" @click="onlyAuthor()">只看作者</view>
			</view>
			<!-- 排序 -->
			<view class="comments_order">
				<view class="order_hot" @click="orderComments(0)">最热</view>
				<view class="order_lastest active" @click="orderComments(1)">最新</view>
				<view class="order_earliest" @click="orderComments(2)">最早</view>
			</view>
		</view>

		<!-- 评论 -->
		<view class="comments_box">
			<!-- 有评论 -->
			<view class="comment" v-if="post.commentCount > 0" v-for="(comment, index) in post.comments" :key="index">
				<!-- 评论用户信息 -->
				<view class="comment_user_info">
					<!-- 用户头像 -->
					<view class="left_box">
						<image :src="post.comments[index].user.headPortrait"></image>
					</view>
					<view class="right_box">
						<!-- 用户昵称 -->
						<view class="comment_user_name">{{post.comments[index].user.username}}</view>
						<!-- 评论时间 -->
						<view class="comment_time">发布于：{{formatTimestamp(post.comments[index].publishTime)}}</view>
					</view>
				</view>
				<!-- 评论信息 -->
				<view class="comment_info">
					<!-- 评论内容 -->
					<view class="comment_content">{{post.comments[index].content}}</view>
					<!-- 分隔线 -->
					<view class="line" v-if="index != post.comments.length - 1"></view>
				</view>
				<view v-if="index == post.comments.length - 1" style="width: 100%; height: 80px;"></view>
			</view>
			<!-- 无评论 -->
			<view class="no_comment" v-if="post.comments.length == 0">
				<view>暂无评论</view>
			</view>
		</view>
		<!-- 发表评论 -->
		<view class="publish_comment_box">
			<view class="input_box">
				<textarea v-model="commentContent" :adjust-position="true" maxlength="-1" auto-height placeholder="回复一下" />
			</view>
			<view class="submit_box" @click="publishComment()">
				<button>发送</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				commentsOrder: 1, // 0 - 按热度	1 - 按时间最新的在上	2 - 按时间最先发布的在上
				commentSelect: 0, // 0 - 查看所有  1 - 只看作者
				commentContent: "",
				post: {
					author: {
						uid: "123",
						username: "张三",
						headPortrait: "/static/icons/logo.png"
					},
					publishTime: Date.now(),
					title: "Big Title X X X X X X X",
					content: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
					imgList: ["/static/community/nums/1.png", "/static/community/nums/5.png", "/static/community/nums/2.png",
						"/static/community/nums/7.png"
					],
					commentCount: 666,
					comments: [{
						user: {
							uid: "123",
							username: "张三",
							headPortrait: "/static/community/nums/1.png"
						},
						content: "666",
						publishTime: Date.now()
					}, {
						user: {
							uid: "321",
							username: "李四",
							headPortrait: "/static/community/nums/2.png"
						},
						content: "来了来了",
						publishTime: Date.now()
					}, {
						user: {
							uid: "456",
							username: "王五",
							headPortrait: "/static/community/nums/3.png"
						},
						content: "逆天",
						publishTime: Date.now()
					}, {
						user: {
							uid: "123",
							username: "test",
							headPortrait: "/static/community/nums/4.png"
						},
						content: "test",
						publishTime: Date.now()
					}, {
						user: {
							uid: "123",
							username: "test",
							headPortrait: "/static/community/nums/5.png"
						},
						content: "test",
						publishTime: Date.now()
					}, {
						user: {
							uid: "123",
							username: "test",
							headPortrait: "/static/community/nums/6.png"
						},
						content: "test",
						publishTime: Date.now()
					}, {
						user: {
							uid: "123",
							username: "test",
							headPortrait: "/static/community/nums/7.png"
						},
						content: "test",
						publishTime: Date.now()
					}, {
						user: {
							uid: "123",
							username: "test",
							headPortrait: "/static/community/nums/1.png"
						},
						content: "test",
						publishTime: Date.now()
					}, {
						user: {
							uid: "123",
							username: "test",
							headPortrait: "/static/community/nums/2.png"
						},
						content: "test",
						publishTime: Date.now()
					}, {
						user: {
							uid: "123",
							username: "test",
							headPortrait: "/static/community/nums/3.png"
						},
						content: "test",
						publishTime: Date.now()
					}, {
						user: {
							uid: "123",
							username: "test",
							headPortrait: "/static/community/nums/4.png"
						},
						content: "test",
						publishTime: Date.now()
					}]
				}
			}
		},
		methods: {
			formatTimestamp(timestamp) {
				let date = new Date(timestamp);
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				let hour = date.getHours();
				let minute = date.getMinutes();
				let second = date.getSeconds();
				return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
			},
			previewImage(idx) {
				let src = this.post.imgList;
				uni.previewImage({
					current: idx,
					urls: src
				})
			},
			allComments() {
				console.log("查看全部评论");
				this.commentSelect = 0;
			},
			onlyAuthor() {
				console.log("只看作者");
				this.commentSelect = 1;
			},
			orderComments(order) {
				console.log("评论排序方式" + order);
				this.commentsOrder = order;
			},
			publishComment() {
				console.log("提交评论");
				let comment = this.commentContent;
				let currentTime = Date.now();
				let uid = "1234567";
				let username = "zhangsan";
			}
		}
	}
</script>

<style lang="scss">
	.post_box {
		padding: 20rpx;

		.author_info_box {
			height: calc(15vw - 40rpx);
			width: 100%;
			display: inline-flex;

			.left_box {
				width: calc(15vw - 40rpx);
				height: 100%;

				image {
					width: 100%;
					height: 100%;
					padding: 0;
					border-radius: 50%;
				}
			}

			.right_box {
				width: 60%;
				height: 100%;
				padding-left: 10rpx;

				.author_name {
					height: 60%;
					display: flex;
					align-items: center;
				}

				.publish_time {
					height: 40%;
					color: #b9b9b9;
					font-size: 10px;
					display: flex;
					align-items: center;
				}
			}
		}

		.post_title_box {
			display: flex;
			align-items: center;
			width: 100%;
			font-size: 30px;
			font-weight: 700;
			word-wrap: break-word;
		}

		.line {
			margin: 10rpx 0;
			width: 100%;
			border-bottom: #cbcbcb solid 2px;
			border-radius: 20rpx;
		}

		.post_content_box {
			width: 100%;
			word-wrap: break-word;
			word-break: break-all;
			white-space: pre-line;
		}

		.img_list_box {
			width: 100%;
			display: inline-flex;
			flex-wrap: wrap;
			justify-content: space-between;

			.img_box {
				border-radius: 20rpx;
				margin: 10rpx 0 10rpx 0;
				height: calc((100vw - 100rpx) / 3);
				width: calc((100vw - 100rpx) / 3);

				.img {
					border-radius: 20rpx;
					height: 100%;
					width: 100%;
				}
			}
		}
	}

	.select_bar_box {
		border-top: 5px solid #e5e5e5;
		padding: 10rpx 20rpx 10rpx 20rpx;
		width: calc(100vw - 40rpx);
		display: inline-flex;
		justify-content: space-between;

		.select_comments {
			display: inline-flex;
			color: #595959;

			.active {
				font-weight: 700;
			}

			.all_comments {
				padding-right: 15rpx;
			}

			.only_author {
				padding-left: 15rpx;
			}
		}

		.comments_order {
			display: inline-flex;
			background-color: #efefef;
			border-radius: 30rpx;
			color: #a7a7a7;

			.active {
				font-weight: 600;
				background-color: white;
				border: solid #efefef 2rpx;
				border-radius: 30rpx;
				color: #2b2b2b;
			}

			.order_hot {
				padding: 0 20rpx 0 20rpx;
			}

			.order_lastest {
				padding: 0 20rpx 0 20rpx;
			}

			.order_earliest {
				padding: 0 20rpx 0 20rpx;
			}
		}
	}

	.comments_box {
		padding: 20rpx;
		width: calc(100% - 40rpx);

		.comment {
			width: 100%;

			.comment_user_info {
				width: 100%;
				height: calc(15vw - 40rpx);
				display: inline-flex;

				.left_box {
					width: calc(15vw - 40rpx);

					image {
						width: 100%;
						height: 100%;
						padding: 0;
						border-radius: 50%;
					}
				}

				.right_box {
					height: 100%;
					width: 60%;
					padding-left: 20rpx;

					.comment_user_name {
						height: 65%;
						display: flex;
						align-items: center;
					}

					.comment_time {
						height: 35%;
						display: flex;
						align-items: center;
						font-size: 10px;
						color: #b9b9b9;
					}
				}
			}

			.comment_info {
				padding-left: calc(15vw - 40rpx + 20rpx);

				.line {
					margin: 5% 0 5% 0;
					width: 100%;
					border-bottom: #cbcbcb solid 2px;
					border-radius: 20rpx;
				}
			}

		}

		.no_comment {
			display: flex;
			justify-content: center;
			padding-top: 20%;

			view {
				color: #acacac;
			}
		}
	}

	.publish_comment_box {
		position: fixed;
		bottom: 0;
		background-color: #e8e8e8;
		width: calc(100vw - 40rpx);
		padding: 10rpx 20rpx 10rpx 20rpx;
		display: inline-flex;
		justify-content: space-around;

		.input_box {
			background-color: #f9f9f9;
			width: calc(14 * (100vw - 40rpx) / 20);
			padding: 20rpx;
			font-size: 20px;
			border-radius: 50rpx;
			word-wrap: break-word;

			textarea {
				width: 100%;
			}
		}

		.submit_box {
			width: calc(4 * (100vw - 40rpx) / 20);

			button {
				background-color: #18c2ff;
				border-radius: 40rpx;
			}
		}
	}
</style>