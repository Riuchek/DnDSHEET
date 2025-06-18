import { _ as __nuxt_component_0 } from './nuxt-link-DQ50e8ET.mjs';
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, unref, useSSRContext } from 'file:///home/joaocorreia/dndsheet/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr } from 'file:///home/joaocorreia/dndsheet/node_modules/vue/server-renderer/index.mjs';
import 'file:///home/joaocorreia/dndsheet/node_modules/ufo/dist/index.mjs';
import './server.mjs';
import 'file:///home/joaocorreia/dndsheet/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///home/joaocorreia/dndsheet/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///home/joaocorreia/dndsheet/node_modules/h3/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///home/joaocorreia/dndsheet/node_modules/destr/dist/index.mjs';
import 'file:///home/joaocorreia/dndsheet/node_modules/hookable/dist/index.mjs';
import 'file:///home/joaocorreia/dndsheet/node_modules/node-mock-http/dist/index.mjs';
import 'file:///home/joaocorreia/dndsheet/node_modules/unstorage/dist/index.mjs';
import 'file:///home/joaocorreia/dndsheet/node_modules/unstorage/drivers/fs.mjs';
import 'file:///home/joaocorreia/dndsheet/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///home/joaocorreia/dndsheet/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///home/joaocorreia/dndsheet/node_modules/ohash/dist/index.mjs';
import 'file:///home/joaocorreia/dndsheet/node_modules/klona/dist/index.mjs';
import 'file:///home/joaocorreia/dndsheet/node_modules/defu/dist/defu.mjs';
import 'file:///home/joaocorreia/dndsheet/node_modules/scule/dist/index.mjs';
import 'file:///home/joaocorreia/dndsheet/node_modules/unctx/dist/index.mjs';
import 'file:///home/joaocorreia/dndsheet/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///home/joaocorreia/dndsheet/node_modules/pathe/dist/index.mjs';
import 'file:///home/joaocorreia/dndsheet/node_modules/unhead/dist/server.mjs';
import 'file:///home/joaocorreia/dndsheet/node_modules/devalue/index.js';
import 'file:///home/joaocorreia/dndsheet/node_modules/unhead/dist/utils.mjs';
import 'file:///home/joaocorreia/dndsheet/node_modules/unhead/dist/plugins.mjs';
import 'file:///home/joaocorreia/dndsheet/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const username = ref("");
    const password = ref("");
    const confirmPassword = ref("");
    const error = ref("");
    const loading = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900" }, _attrs))}><div class="bg-gray-800/80 backdrop-blur-sm p-8 rounded-lg shadow-2xl w-96 border border-purple-500/30 relative overflow-hidden"><div class="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10 animate-pulse"></div><div class="relative z-10"><h1 class="text-3xl font-bold mb-2 text-center text-purple-300 font-fantasy tracking-wider">Cadastro do Aventureiro</h1><div class="text-center mb-6"><span class="text-gray-400 text-sm">J\xE1 tem uma conta? </span>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "text-purple-400 hover:text-purple-300 underline decoration-purple-500/50 hover:decoration-purple-400 transition-all duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Fa\xE7a login`);
          } else {
            return [
              createTextVNode("Fa\xE7a login")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><form class="space-y-6"><div><label for="username" class="block text-sm font-medium text-gray-300 mb-2">Nome do aventureiro</label><input id="username"${ssrRenderAttr("value", unref(username))} type="text" required class="w-full px-4 py-3 rounded-md bg-gray-700/50 border border-gray-600 text-gray-100 placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all duration-300 backdrop-blur-sm" placeholder="Diga-me seu nome"></div><div><label for="password" class="block text-sm font-medium text-gray-300 mb-2">Sussurro de seu Deus</label><input id="password"${ssrRenderAttr("value", unref(password))} type="password" required minlength="6" class="w-full px-4 py-3 rounded-md bg-gray-700/50 border border-gray-600 text-gray-100 placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all duration-300 backdrop-blur-sm" placeholder="Sussurre-me seu segredo"></div><div><label for="confirmPassword" class="block text-sm font-medium text-gray-300 mb-2">Confirme o sussurro</label><input id="confirmPassword"${ssrRenderAttr("value", unref(confirmPassword))} type="password" required minlength="6" class="w-full px-4 py-3 rounded-md bg-gray-700/50 border border-gray-600 text-gray-100 placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all duration-300 backdrop-blur-sm" placeholder="Sussurre novamente"></div>`);
      if (unref(error)) {
        _push(`<div class="text-red-400 text-sm bg-red-900/20 border border-red-500/30 rounded-md p-3">${ssrInterpolate(unref(error))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button type="submit" class="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-md hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2 focus:ring-offset-gray-800 font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""}>`);
      if (unref(loading)) {
        _push(`<span class="flex items-center justify-center"><svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Criando pergaminho... </span>`);
      } else {
        _push(`<span>Cadastrar</span>`);
      }
      _push(`</button></form></div><div class="absolute top-2 right-2 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div><div class="absolute bottom-2 left-2 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cadastro/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-szSMMZI8.mjs.map
