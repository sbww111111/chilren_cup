<template>
    <view class="tab-bar">
      <!-- 左侧按钮 -->
      <view class="tab-item tab-item-one" @click="navigateTo('/pages/index/index')">
        <image class="icon" src="/static/icons/home.png" />
	   <image class="tab-img" src="/static/fonts/home.png"/>
      </view>
	  
	  <view class="tab-item tab-item-two" @click="navigateTo('/pages/index/index')">
	    <image class="icon" src="/static/icons/community.png" />
		<image class="tab-img" src="/static/fonts/home.png"/>
	  </view>


      <!-- 中间按钮 -->
      <view class="tab-item tab-item-center" @click="navigateTo('/pages/post/post')">
        <image class="icon" src="/static/icons/points.png" />
		<image class="tab-img" src="/static/fonts/home.png"/>
      </view>
      
      <!-- 右侧按钮 -->
      <view class="tab-item tab-item-four" @click="navigateTo('/pages/knowledge/knowledge')">
        <image class="icon" src="/static/icons/knowledge.png" />
		<image class="tab-img" src="/static/fonts/home.png"/>
      </view>
	  <view class="tab-item tab-item-five" @click="navigateTo('/pages/user/user')">
	    <image class="icon" src="/static/icons/my.png" />
		<image class="tab-img" src="/static/fonts/home.png"/>
	  </view>
    </view>

  </template>

  <script>
  export default {
    methods: {
      navigateTo(url) {
        uni.navigateTo({
          url
        });
      }
    }
  };
  </script>


  <style scoped>
  /* 半圆形底部导航栏样式 */
  .tab-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 110px; /* 设置底部导航栏的高度 */
    background-color: #f4f5f7;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    box-shadow: 0 -5px 10px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    overflow: visible; /* 允许按钮超出边界 */
  }


  /* 公共样式：每个按钮 */
  .tab-item {
    position: absolute;
    bottom: 0;
    width: 63px; /* 按钮宽度 */
    height: 63px; /* 按钮高度 */
    background-color: #f4f5f7;
    border-radius: 50%; /* 圆形按钮 */
    display: flex;
    justify-content: center;
    align-items: center;
    /* box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2); */
    z-index: 1001;
  }
	.tab-img {
	  position: absolute;
	  bottom: -10px; /* 调整文字距离按钮的距离 */
	  z-index: 0;
	  height: 23px;
	  width: 40px;
	}

  /* 左侧按钮 */
  .tab-item-one {
    left: 5%;
    transform: translateY(-90%); /* 超出半圆顶部 */
  }
  .tab-item-two {
    left: 23%;
    transform: translateY(-110%); /* 超出半圆顶部 */
  }

  /* 中间按钮 */
  .tab-item-center {
    left: 50%;
    transform: translate(-50%, -120%); /* 中间按钮完全悬浮 */
    background-color: #f4f5f7; /* 中间按钮颜色 */
  }

  /* 右侧按钮 */
  .tab-item-four {
    right: 23%;
    transform: translateY(-110%); /* 超出半圆顶部 */
  }
  .tab-item-five {
    right: 5%;
    transform: translateY(-90%); /* 超出半圆顶部 */
  }
  /* 按钮图标 */
  .icon {
    width: 30px;
    height: 30px;
  }
  </style>