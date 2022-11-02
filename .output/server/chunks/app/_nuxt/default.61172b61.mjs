import { _ as _export_sfc, e as __nuxt_component_0$2 } from '../server.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import 'ohmyfetch';
import 'ufo';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
import 'defu';
import '@vue/shared';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'radix3';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'fs';
import 'pathe';
import 'url';

const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = __nuxt_component_0$2;
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "header wrapper" }, _attrs))} data-v-877eb307>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: `/` }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h1 class="title" data-v-877eb307${_scopeId}> \u65E5\u672C\u4E2D\u4E16\u6C17\u8C61\u707D\u5BB3\u53F2\u5E74\u8868\u7A3F (\u85E4\u6728\u4E45\u5FD7\u7DE8 \u9AD8\u5FD7\u66F8\u9662) </h1>`);
      } else {
        return [
          createVNode("h1", { class: "title" }, " \u65E5\u672C\u4E2D\u4E16\u6C17\u8C61\u707D\u5BB3\u53F2\u5E74\u8868\u7A3F (\u85E4\u6728\u4E45\u5FD7\u7DE8 \u9AD8\u5FD7\u66F8\u9662) ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</header>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-877eb307"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$2;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))} data-v-6c9ad36c><div class="wrapper" data-v-6c9ad36c><p class="text" data-v-6c9ad36c>\u672C\u30B3\u30F3\u30C6\u30F3\u30C4\u306F<a href="https://creativecommons.org/licenses/by/4.0/deed.ja" data-v-6c9ad36c>\u30AF\u30EA\u30A8\u30A4\u30C6\u30A3\u30D6\u30FB\u30B3\u30E2\u30F3\u30BA\u3000\u8868\u793A 4.0 \u56FD\u969B\u30E9\u30A4\u30BB\u30F3\u30B9</a>\u306E\u6761\u4EF6\u306E\u3082\u3068\u3067\u63D0\u4F9B\u3057\u3066\u3044\u307E\u3059\u3002 </p></div><nav data-v-6c9ad36c>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "nav"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u30C8\u30C3\u30D7`);
      } else {
        return [
          createTextVNode("\u30C8\u30C3\u30D7")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/usage",
    class: "nav"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u51E1\u4F8B`);
      } else {
        return [
          createTextVNode("\u51E1\u4F8B")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/about",
    class: "nav"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About`);
      } else {
        return [
          createTextVNode("About")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</nav></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-6c9ad36c"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Header = __nuxt_component_0;
  const _component_Footer = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default.61172b61.mjs.map
