<template>
	<view class="knowledge_container">
		<view class="head">
			<form @submit="formSubmit">
				<view class="search">
					<image class="search_span" src="/static/knowledge/water_drop.png"></image>
					<input type="text" placeholder="输入关键字" :value="value" />
				</view>
				<view class="search_btn">
					<button form-type="submit">搜索</button>
				</view>
			</form>
		</view>
		<view class="knowledge_posts">
			<scroll-view scroll-y="true" class="knowledge_post_scroll">
				<view class="knowledge_post_item" v-for="(item, index) in posts" :key="index">
					<image :src="item.postCoverUrl"></image>
					<text>{{item.postTitle}}</text>
				</view>
				<!-- 空白占位 -->
				<view style="width: 100%; height: 120px; float: left;"></view>
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
				posts: [{
					postTitle: "标题1",
					postCoverUrl: "/static/knowledge/drink.png"
				}, {
					postTitle: "标题2",
					postCoverUrl: "/static/knowledge/drink.png"
				}, {
					postTitle: "标题3",
					postCoverUrl: "/static/knowledge/drink.png"
				}, {
					postTitle: "标题4",
					postCoverUrl: "/static/knowledge/drink.png"
				}, {
					postTitle: "标题5",
					postCoverUrl: "/static/knowledge/drink.png"
				}, {
					postTitle: "标题6",
					postCoverUrl: "/static/knowledge/drink.png"
				}, {
					postTitle: "标题7",
					postCoverUrl: "/static/knowledge/drink.png"
				}]
			}
		},
		methods: {
			formSubmit: function(e) {
				console.log('form发生了submit事件')
			},
		}
	}
</script>

<style lang="scss">
	.knowledge_container {
		padding-left: 20px;
		padding-top: 20px;
		padding-right: 20px;
		background-color: #fff77f;
	}

	.head {
		position: sticky;
		z-index: 10;
		top: 0;

		.search {
			width: 66%;
			float: left;
			border: solid 5px #0f9fff;
			border-radius: 30rpx;
			padding-left: 50rpx;
			margin-right: 10px;

			.search_span {
				position: absolute;
				top: 7px;
				left: 10px;
				width: 15px;
				height: 18px;
			}
		}

		.search_btn {
			button {
				padding: 0;
				margin: 0;
				text-align: center;
				width: 20%;
				height: 33px;
				line-height: 23px;
				background-color: #fff77f;
				border: solid #0f9fff 5px;
				border-radius: 30rpx;
				font-size: 20px;
				font-weight: 700;
				color: #0f9fff;
			}
		}
	}

	.knowledge_posts {
		height: calc(100vh - var(--window-top) - 80px);
		margin-top: 10px;
		background-color: #0f9fff;
		border: #0f9fff solid 1px;
		border-radius: 20rpx;
		padding: 1%;

		.knowledge_post_scroll {
			height: 100%;

			.knowledge_post_item {
				margin: 2%;
				float: left;
				height: 35%;
				width: 46%;
				font-size: 36rpx;
				border: solid 0;
				border-radius: 20rpx;
				background-color: #fffcd9;

				image {
					width: 100%;
					height: 80%;
				}

				text {
					padding: 5%;
				}
			}
		}
	}
</style>