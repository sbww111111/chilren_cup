"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const CustomTabBar = () => "../../components/CustomTabBar.js";
const _sfc_main = {
  components: {
    CustomTabBar
  },
  data() {
    return {
      background: ["red", "blue", "green"],
      indicatorDots: true,
      autoplay: false,
      interval: 2e3,
      duration: 500,
      dian: 100,
      shuiliang1: 20
      //73 就是100
    };
  }
};
if (!Array) {
  const _component_CustomTabBar = common_vendor.resolveComponent("CustomTabBar");
  _component_CustomTabBar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0$1,
    b: common_assets._imports_1$1,
    c: common_assets._imports_2$1,
    d: $data.indicatorDots,
    e: $data.autoplay,
    f: $data.interval,
    g: $data.duration,
    h: common_assets._imports_3$1,
    i: common_vendor.t($data.dian),
    j: common_assets._imports_4$1,
    k: common_assets._imports_5$1,
    l: common_assets._imports_6,
    m: 9 + $data.shuiliang1 + "%",
    n: common_assets._imports_7,
    o: 4 + $data.shuiliang1 + "%"
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
