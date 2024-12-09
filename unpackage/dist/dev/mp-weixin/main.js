"use strict";
const common_vendor = require("./common/vendor.js");
const common_assets = require("./common/assets.js");
if (!Math) {
  "./pages/index/index.js";
}
const _sfc_main$1 = {
  methods: {
    navigateTo(url) {
      common_vendor.index.redirectTo({
        url
      });
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0,
    b: common_assets._imports_1,
    c: common_vendor.o(($event) => $options.navigateTo("/pages/index/index")),
    d: common_assets._imports_2,
    e: common_assets._imports_1,
    f: common_vendor.o(($event) => $options.navigateTo("/pages/index/index")),
    g: common_assets._imports_3,
    h: common_assets._imports_1,
    i: common_vendor.o(($event) => $options.navigateTo("/pages/post/post")),
    j: common_assets._imports_4,
    k: common_assets._imports_1,
    l: common_vendor.o(($event) => $options.navigateTo("/pages/user/user")),
    m: common_assets._imports_5,
    n: common_assets._imports_1,
    o: common_vendor.o(($event) => $options.navigateTo("/pages/user/user"))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-6def6a3b"]]);
const _sfc_main = {
  components: {
    CustomTabBar: Component
  }
};
if (!Array) {
  const _component_CustomTabBar = common_vendor.resolveComponent("CustomTabBar");
  _component_CustomTabBar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.Component = Component;
exports.createApp = createApp;
