import { defineComponent, withAsyncContext, computed, ref, watch, mergeProps, unref, useSSRContext } from 'file:///home/joaocorreia/dndsheet/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'file:///home/joaocorreia/dndsheet/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc, u as useRoute } from './server.mjs';
import { u as useFetch } from './fetch-Cu5qbjNO.mjs';
import 'file:///home/joaocorreia/dndsheet/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///home/joaocorreia/dndsheet/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///home/joaocorreia/dndsheet/node_modules/h3/dist/index.mjs';
import 'file:///home/joaocorreia/dndsheet/node_modules/ufo/dist/index.mjs';
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
import 'file:///home/joaocorreia/dndsheet/node_modules/@vue/shared/dist/shared.cjs.prod.js';
import 'file:///home/joaocorreia/dndsheet/node_modules/perfect-debounce/dist/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const characterId = route.params.id;
    const { data: characterData } = ([__temp, __restore] = withAsyncContext(() => useFetch(`/api/characters/${characterId}`, "$3dE46Amzdw")), __temp = await __temp, __restore(), __temp);
    const character = computed(() => {
      var _a;
      return (_a = characterData.value) == null ? void 0 : _a.character;
    });
    const formData = ref({
      name: "",
      level: 1,
      race: "",
      background: "",
      alignment: "",
      experience: 0,
      strength: 10,
      dexterity: 10,
      constitution: 10,
      intelligence: 10,
      wisdom: 10,
      charisma: 10,
      hitPoints: 0,
      armorClass: 10,
      initiative: 0,
      speed: 30,
      class_name: "",
      class_hit_die: 6,
      proficiencies: [],
      saving_throws: []
    });
    watch(character, (newCharacter) => {
      if (newCharacter) {
        formData.value = {
          name: newCharacter.name,
          level: newCharacter.level,
          race: newCharacter.race,
          background: newCharacter.background,
          alignment: newCharacter.alignment,
          experience: newCharacter.experience,
          strength: newCharacter.strength,
          dexterity: newCharacter.dexterity,
          constitution: newCharacter.constitution,
          intelligence: newCharacter.intelligence,
          wisdom: newCharacter.wisdom,
          charisma: newCharacter.charisma,
          hitPoints: newCharacter.hitPoints,
          armorClass: newCharacter.armorClass,
          initiative: newCharacter.initiative,
          speed: newCharacter.speed,
          class_name: newCharacter.class_name,
          class_hit_die: newCharacter.class_hit_die,
          proficiencies: newCharacter.proficiencies,
          saving_throws: newCharacter.saving_throws
        };
      }
    }, { immediate: true });
    const getModifier = (score) => {
      return Math.floor((score - 10) / 2);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50 py-8" }, _attrs))} data-v-6946a2e0><div class="max-w-4xl mx-auto px-4" data-v-6946a2e0><div class="bg-white rounded-lg shadow-lg p-6" data-v-6946a2e0><div class="flex justify-between items-center mb-6" data-v-6946a2e0><h1 class="text-3xl font-bold text-gray-900" data-v-6946a2e0>Editar Personagem</h1><div class="space-x-2" data-v-6946a2e0><button class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition-colors" data-v-6946a2e0> Cancelar </button><button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors" data-v-6946a2e0> Salvar Altera\xE7\xF5es </button></div></div>`);
      if (unref(character)) {
        _push(`<div class="space-y-6" data-v-6946a2e0><div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-6946a2e0><div class="form-group" data-v-6946a2e0><label class="block text-sm font-medium text-gray-700 mb-1" data-v-6946a2e0>Nome do Personagem</label><input${ssrRenderAttr("value", unref(formData).name)} type="text" class="form-input" data-v-6946a2e0></div><div class="form-group" data-v-6946a2e0><label class="block text-sm font-medium text-gray-700 mb-1" data-v-6946a2e0>Classe</label><input${ssrRenderAttr("value", unref(formData).class_name)} type="text" class="form-input" disabled data-v-6946a2e0></div><div class="form-group" data-v-6946a2e0><label class="block text-sm font-medium text-gray-700 mb-1" data-v-6946a2e0>N\xEDvel</label><input${ssrRenderAttr("value", unref(formData).level)} type="number" min="1" max="20" class="form-input" data-v-6946a2e0></div><div class="form-group" data-v-6946a2e0><label class="block text-sm font-medium text-gray-700 mb-1" data-v-6946a2e0>Ra\xE7a</label><input${ssrRenderAttr("value", unref(formData).race)} type="text" class="form-input" data-v-6946a2e0></div><div class="form-group" data-v-6946a2e0><label class="block text-sm font-medium text-gray-700 mb-1" data-v-6946a2e0>Antecedente</label><input${ssrRenderAttr("value", unref(formData).background)} type="text" class="form-input" data-v-6946a2e0></div><div class="form-group" data-v-6946a2e0><label class="block text-sm font-medium text-gray-700 mb-1" data-v-6946a2e0>Alinhamento</label><input${ssrRenderAttr("value", unref(formData).alignment)} type="text" class="form-input" data-v-6946a2e0></div><div class="form-group" data-v-6946a2e0><label class="block text-sm font-medium text-gray-700 mb-1" data-v-6946a2e0>Experi\xEAncia</label><input${ssrRenderAttr("value", unref(formData).experience)} type="number" min="0" class="form-input" data-v-6946a2e0></div></div><div data-v-6946a2e0><h3 class="text-xl font-semibold mb-4" data-v-6946a2e0>Habilidades</h3><div class="grid grid-cols-2 md:grid-cols-3 gap-4" data-v-6946a2e0><div class="ability-score" data-v-6946a2e0><label class="block text-sm font-medium text-gray-700 mb-1" data-v-6946a2e0>For\xE7a</label><input${ssrRenderAttr("value", unref(formData).strength)} type="number" min="1" max="20" class="form-input" data-v-6946a2e0><div class="text-xs text-gray-600 mt-1" data-v-6946a2e0> Modificador: ${ssrInterpolate(getModifier(unref(formData).strength) >= 0 ? "+" : "")}${ssrInterpolate(getModifier(unref(formData).strength))}</div></div><div class="ability-score" data-v-6946a2e0><label class="block text-sm font-medium text-gray-700 mb-1" data-v-6946a2e0>Destreza</label><input${ssrRenderAttr("value", unref(formData).dexterity)} type="number" min="1" max="20" class="form-input" data-v-6946a2e0><div class="text-xs text-gray-600 mt-1" data-v-6946a2e0> Modificador: ${ssrInterpolate(getModifier(unref(formData).dexterity) >= 0 ? "+" : "")}${ssrInterpolate(getModifier(unref(formData).dexterity))}</div></div><div class="ability-score" data-v-6946a2e0><label class="block text-sm font-medium text-gray-700 mb-1" data-v-6946a2e0>Constitui\xE7\xE3o</label><input${ssrRenderAttr("value", unref(formData).constitution)} type="number" min="1" max="20" class="form-input" data-v-6946a2e0><div class="text-xs text-gray-600 mt-1" data-v-6946a2e0> Modificador: ${ssrInterpolate(getModifier(unref(formData).constitution) >= 0 ? "+" : "")}${ssrInterpolate(getModifier(unref(formData).constitution))}</div></div><div class="ability-score" data-v-6946a2e0><label class="block text-sm font-medium text-gray-700 mb-1" data-v-6946a2e0>Intelig\xEAncia</label><input${ssrRenderAttr("value", unref(formData).intelligence)} type="number" min="1" max="20" class="form-input" data-v-6946a2e0><div class="text-xs text-gray-600 mt-1" data-v-6946a2e0> Modificador: ${ssrInterpolate(getModifier(unref(formData).intelligence) >= 0 ? "+" : "")}${ssrInterpolate(getModifier(unref(formData).intelligence))}</div></div><div class="ability-score" data-v-6946a2e0><label class="block text-sm font-medium text-gray-700 mb-1" data-v-6946a2e0>Sabedoria</label><input${ssrRenderAttr("value", unref(formData).wisdom)} type="number" min="1" max="20" class="form-input" data-v-6946a2e0><div class="text-xs text-gray-600 mt-1" data-v-6946a2e0> Modificador: ${ssrInterpolate(getModifier(unref(formData).wisdom) >= 0 ? "+" : "")}${ssrInterpolate(getModifier(unref(formData).wisdom))}</div></div><div class="ability-score" data-v-6946a2e0><label class="block text-sm font-medium text-gray-700 mb-1" data-v-6946a2e0>Carisma</label><input${ssrRenderAttr("value", unref(formData).charisma)} type="number" min="1" max="20" class="form-input" data-v-6946a2e0><div class="text-xs text-gray-600 mt-1" data-v-6946a2e0> Modificador: ${ssrInterpolate(getModifier(unref(formData).charisma) >= 0 ? "+" : "")}${ssrInterpolate(getModifier(unref(formData).charisma))}</div></div></div></div><div data-v-6946a2e0><h3 class="text-xl font-semibold mb-4" data-v-6946a2e0>Estat\xEDsticas de Combate</h3><div class="grid grid-cols-2 md:grid-cols-4 gap-4" data-v-6946a2e0><div class="stat" data-v-6946a2e0><label class="block text-sm font-medium text-gray-700 mb-1" data-v-6946a2e0>Pontos de Vida</label><input${ssrRenderAttr("value", unref(formData).hitPoints)} type="number" min="1" class="form-input" data-v-6946a2e0></div><div class="stat" data-v-6946a2e0><label class="block text-sm font-medium text-gray-700 mb-1" data-v-6946a2e0>Classe de Armadura</label><input${ssrRenderAttr("value", unref(formData).armorClass)} type="number" min="1" class="form-input" data-v-6946a2e0></div><div class="stat" data-v-6946a2e0><label class="block text-sm font-medium text-gray-700 mb-1" data-v-6946a2e0>Iniciativa</label><input${ssrRenderAttr("value", unref(formData).initiative)} type="number" class="form-input" data-v-6946a2e0></div><div class="stat" data-v-6946a2e0><label class="block text-sm font-medium text-gray-700 mb-1" data-v-6946a2e0>Velocidade</label><input${ssrRenderAttr("value", unref(formData).speed)} type="number" min="1" class="form-input" data-v-6946a2e0></div></div></div><div data-v-6946a2e0><h3 class="text-xl font-semibold mb-4" data-v-6946a2e0>Caracter\xEDsticas da Classe</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-6946a2e0><div class="feature" data-v-6946a2e0><h4 class="font-semibold mb-2" data-v-6946a2e0>Dado de Vida</h4><p class="text-gray-700" data-v-6946a2e0>d${ssrInterpolate(unref(formData).class_hit_die)}</p></div><div class="feature" data-v-6946a2e0><h4 class="font-semibold mb-2" data-v-6946a2e0>Testes de Resist\xEAncia</h4><ul class="list-disc pl-5 text-gray-700" data-v-6946a2e0><!--[-->`);
        ssrRenderList(unref(formData).saving_throws, (save) => {
          _push(`<li data-v-6946a2e0>${ssrInterpolate(save)}</li>`);
        });
        _push(`<!--]--></ul></div><div class="feature md:col-span-2" data-v-6946a2e0><h4 class="font-semibold mb-2" data-v-6946a2e0>Profici\xEAncias</h4><ul class="list-disc pl-5 text-gray-700" data-v-6946a2e0><!--[-->`);
        ssrRenderList(unref(formData).proficiencies, (prof) => {
          _push(`<li data-v-6946a2e0>${ssrInterpolate(prof)}</li>`);
        });
        _push(`<!--]--></ul></div></div></div></div>`);
      } else {
        _push(`<div class="text-center py-8" data-v-6946a2e0><div class="text-gray-500" data-v-6946a2e0>Carregando personagem...</div></div>`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ficha/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6946a2e0"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-0W6lgLnk.mjs.map
