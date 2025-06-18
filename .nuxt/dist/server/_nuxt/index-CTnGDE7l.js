import { _ as __nuxt_component_0 } from "./nuxt-link-DQ50e8ET.js";
import { defineComponent, withAsyncContext, computed, mergeProps, withCtx, createTextVNode, unref, createBlock, openBlock, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { u as useFetch } from "./fetch-Cu5qbjNO.js";
import { _ as _export_sfc } from "../server.mjs";
import "/home/joaocorreia/dndsheet/node_modules/ufo/dist/index.mjs";
import "/home/joaocorreia/dndsheet/node_modules/ohash/dist/index.mjs";
import "@vue/shared";
import "/home/joaocorreia/dndsheet/node_modules/perfect-debounce/dist/index.mjs";
import "/home/joaocorreia/dndsheet/node_modules/hookable/dist/index.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "/home/joaocorreia/dndsheet/node_modules/unctx/dist/index.mjs";
import "/home/joaocorreia/dndsheet/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/home/joaocorreia/dndsheet/node_modules/radix3/dist/index.mjs";
import "/home/joaocorreia/dndsheet/node_modules/defu/dist/defu.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/characters", "$EIYpdG11tf")), __temp = await __temp, __restore(), __temp);
    const characters = computed(() => {
      var _a;
      return ((_a = data.value) == null ? void 0 : _a.characters) || [];
    });
    const getClassColor = (className) => {
      const colorMap = {
        barbarian: "#8B0000",
        bard: "#9370DB",
        cleric: "#FFD700",
        druid: "#228B22",
        fighter: "#A52A2A",
        monk: "#FFA500",
        paladin: "#4169E1",
        ranger: "#006400",
        rogue: "#4B0082",
        sorcerer: "#FF1493",
        warlock: "#800080",
        wizard: "#1E90FF"
      };
      return colorMap[className.toLowerCase()] || "#808080";
    };
    const getModifier = (score) => {
      return Math.floor((score - 10) / 2);
    };
    const formatDate = (dateString) => {
      return new Date(dateString).toLocaleDateString("pt-BR");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50 py-8" }, _attrs))} data-v-8f2a858f><div class="max-w-7xl mx-auto px-4" data-v-8f2a858f><div class="flex justify-between items-center mb-8" data-v-8f2a858f><h1 class="text-3xl font-bold text-gray-900" data-v-8f2a858f>Personagens</h1>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/ficha",
        class: "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Criar Novo Personagem `);
          } else {
            return [
              createTextVNode(" Criar Novo Personagem ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (unref(characters).length === 0) {
        _push(`<div class="text-center py-12" data-v-8f2a858f><div class="text-gray-500 text-lg mb-4" data-v-8f2a858f> Nenhum personagem encontrado </div></div>`);
      } else {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-v-8f2a858f><!--[-->`);
        ssrRenderList(unref(characters), (character) => {
          _push(`<div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative" data-v-8f2a858f><div class="absolute top-2 right-2 z-10 flex space-x-2" data-v-8f2a858f>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/ficha/${character.id}`,
            class: "bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 transition-colors duration-200 shadow-lg",
            title: "Editar personagem"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-8f2a858f${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" data-v-8f2a858f${_scopeId}></path></svg>`);
              } else {
                return [
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    class: "h-4 w-4",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor"
                  }, [
                    createVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    })
                  ]))
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<button class="bg-red-500 hover:bg-red-600 text-white rounded-full p-2 transition-colors duration-200 shadow-lg" title="Excluir personagem" data-v-8f2a858f><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-8f2a858f><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" data-v-8f2a858f></path></svg></button></div><div class="h-3" style="${ssrRenderStyle({ backgroundColor: getClassColor(character.class_name) })}" data-v-8f2a858f></div><div class="p-6" data-v-8f2a858f><div class="flex justify-between items-start mb-4" data-v-8f2a858f><div data-v-8f2a858f><h2 class="text-xl font-bold text-gray-900 mb-1" data-v-8f2a858f>${ssrInterpolate(character.name)}</h2><p class="text-sm text-gray-600" data-v-8f2a858f>${ssrInterpolate(character.race)} • ${ssrInterpolate(character.class_name)}</p></div><div class="text-right" data-v-8f2a858f><div class="text-2xl font-bold text-gray-900" data-v-8f2a858f>Nv.${ssrInterpolate(character.level)}</div><div class="text-xs text-gray-500" data-v-8f2a858f>${ssrInterpolate(character.experience)} XP</div></div></div><div class="grid grid-cols-3 gap-3 mb-4" data-v-8f2a858f><div class="text-center" data-v-8f2a858f><div class="text-xs text-gray-500" data-v-8f2a858f>FOR</div><div class="text-lg font-bold text-gray-900" data-v-8f2a858f>${ssrInterpolate(character.strength)}</div><div class="text-xs text-gray-600" data-v-8f2a858f>${ssrInterpolate(getModifier(character.strength) >= 0 ? "+" : "")}${ssrInterpolate(getModifier(character.strength))}</div></div><div class="text-center" data-v-8f2a858f><div class="text-xs text-gray-500" data-v-8f2a858f>DES</div><div class="text-lg font-bold text-gray-900" data-v-8f2a858f>${ssrInterpolate(character.dexterity)}</div><div class="text-xs text-gray-600" data-v-8f2a858f>${ssrInterpolate(getModifier(character.dexterity) >= 0 ? "+" : "")}${ssrInterpolate(getModifier(character.dexterity))}</div></div><div class="text-center" data-v-8f2a858f><div class="text-xs text-gray-500" data-v-8f2a858f>CON</div><div class="text-lg font-bold text-gray-900" data-v-8f2a858f>${ssrInterpolate(character.constitution)}</div><div class="text-xs text-gray-600" data-v-8f2a858f>${ssrInterpolate(getModifier(character.constitution) >= 0 ? "+" : "")}${ssrInterpolate(getModifier(character.constitution))}</div></div><div class="text-center" data-v-8f2a858f><div class="text-xs text-gray-500" data-v-8f2a858f>INT</div><div class="text-lg font-bold text-gray-900" data-v-8f2a858f>${ssrInterpolate(character.intelligence)}</div><div class="text-xs text-gray-600" data-v-8f2a858f>${ssrInterpolate(getModifier(character.intelligence) >= 0 ? "+" : "")}${ssrInterpolate(getModifier(character.intelligence))}</div></div><div class="text-center" data-v-8f2a858f><div class="text-xs text-gray-500" data-v-8f2a858f>SAB</div><div class="text-lg font-bold text-gray-900" data-v-8f2a858f>${ssrInterpolate(character.wisdom)}</div><div class="text-xs text-gray-600" data-v-8f2a858f>${ssrInterpolate(getModifier(character.wisdom) >= 0 ? "+" : "")}${ssrInterpolate(getModifier(character.wisdom))}</div></div><div class="text-center" data-v-8f2a858f><div class="text-xs text-gray-500" data-v-8f2a858f>CAR</div><div class="text-lg font-bold text-gray-900" data-v-8f2a858f>${ssrInterpolate(character.charisma)}</div><div class="text-xs text-gray-600" data-v-8f2a858f>${ssrInterpolate(getModifier(character.charisma) >= 0 ? "+" : "")}${ssrInterpolate(getModifier(character.charisma))}</div></div></div><div class="grid grid-cols-3 gap-3 mb-4" data-v-8f2a858f><div class="text-center" data-v-8f2a858f><div class="text-xs text-gray-500" data-v-8f2a858f>PV</div><div class="text-lg font-bold text-red-600" data-v-8f2a858f>${ssrInterpolate(character.hitPoints)}</div></div><div class="text-center" data-v-8f2a858f><div class="text-xs text-gray-500" data-v-8f2a858f>CA</div><div class="text-lg font-bold text-blue-600" data-v-8f2a858f>${ssrInterpolate(character.armorClass)}</div></div><div class="text-center" data-v-8f2a858f><div class="text-xs text-gray-500" data-v-8f2a858f>Inic.</div><div class="text-lg font-bold text-green-600" data-v-8f2a858f>${ssrInterpolate(character.initiative)}</div></div></div><div class="border-t pt-4" data-v-8f2a858f><div class="flex justify-between text-sm text-gray-600 mb-2" data-v-8f2a858f><span data-v-8f2a858f>Velocidade: ${ssrInterpolate(character.speed)}m</span><span data-v-8f2a858f>Dado: d${ssrInterpolate(character.class_hit_die)}</span></div><div class="text-xs text-gray-500" data-v-8f2a858f> Criado em ${ssrInterpolate(formatDate(character.created_at))}</div></div></div></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/fichas/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8f2a858f"]]);
export {
  index as default
};
//# sourceMappingURL=index-CTnGDE7l.js.map
