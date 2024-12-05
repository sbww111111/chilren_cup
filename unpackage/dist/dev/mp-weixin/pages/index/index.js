"use strict";
const common_vendor = require("../../common/vendor.js");
const CustomTabBar = () => "../../components/CustomTabBar.js";
const _sfc_main = {
  components: {
    CustomTabBar
  }
};
if (!Array) {
  const _component_CustomTabBar = common_vendor.resolveComponent("CustomTabBar");
  _component_CustomTabBar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
