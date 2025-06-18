import { defineComponent, ref, mergeProps, unref, useSSRContext, withAsyncContext, computed } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import { u as useFetch } from "./fetch-Cu5qbjNO.js";
import "/home/joaocorreia/dndsheet/node_modules/hookable/dist/index.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "/home/joaocorreia/dndsheet/node_modules/unctx/dist/index.mjs";
import "/home/joaocorreia/dndsheet/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/home/joaocorreia/dndsheet/node_modules/radix3/dist/index.mjs";
import "/home/joaocorreia/dndsheet/node_modules/defu/dist/defu.mjs";
import "/home/joaocorreia/dndsheet/node_modules/ufo/dist/index.mjs";
import "/home/joaocorreia/dndsheet/node_modules/ohash/dist/index.mjs";
import "@vue/shared";
import "/home/joaocorreia/dndsheet/node_modules/perfect-debounce/dist/index.mjs";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CharacterSheet",
  __ssrInlineRender: true,
  props: {
    selectedClass: {}
  },
  emits: ["save"],
  setup(__props, { emit: __emit }) {
    const character = ref({
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
      proficiencies: [],
      savingThrows: []
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (_ctx.selectedClass) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "character-sheet" }, _attrs))} data-v-71e73ca1><div class="sheet-header" data-v-71e73ca1><h2 class="text-2xl font-bold mb-4" data-v-71e73ca1>Character Sheet</h2><div class="grid grid-cols-2 gap-4" data-v-71e73ca1><div class="form-group" data-v-71e73ca1><label data-v-71e73ca1>Character Name</label><input${ssrRenderAttr("value", unref(character).name)} type="text" class="form-input" data-v-71e73ca1></div><div class="form-group" data-v-71e73ca1><label data-v-71e73ca1>Class</label><input${ssrRenderAttr("value", _ctx.selectedClass.name)} type="text" class="form-input" disabled data-v-71e73ca1></div><div class="form-group" data-v-71e73ca1><label data-v-71e73ca1>Level</label><input${ssrRenderAttr("value", unref(character).level)} type="number" min="1" max="20" class="form-input" data-v-71e73ca1></div><div class="form-group" data-v-71e73ca1><label data-v-71e73ca1>Race</label><input${ssrRenderAttr("value", unref(character).race)} type="text" class="form-input" data-v-71e73ca1></div></div></div><div class="sheet-body mt-6" data-v-71e73ca1><div class="grid grid-cols-3 gap-6" data-v-71e73ca1><div class="ability-scores" data-v-71e73ca1><h3 class="text-xl font-semibold mb-4" data-v-71e73ca1>Ability Scores</h3><div class="grid grid-cols-2 gap-4" data-v-71e73ca1><div class="ability-score" data-v-71e73ca1><label data-v-71e73ca1>Strength</label><input${ssrRenderAttr("value", unref(character).strength)} type="number" min="1" max="20" class="form-input" data-v-71e73ca1></div><div class="ability-score" data-v-71e73ca1><label data-v-71e73ca1>Dexterity</label><input${ssrRenderAttr("value", unref(character).dexterity)} type="number" min="1" max="20" class="form-input" data-v-71e73ca1></div><div class="ability-score" data-v-71e73ca1><label data-v-71e73ca1>Constitution</label><input${ssrRenderAttr("value", unref(character).constitution)} type="number" min="1" max="20" class="form-input" data-v-71e73ca1></div><div class="ability-score" data-v-71e73ca1><label data-v-71e73ca1>Intelligence</label><input${ssrRenderAttr("value", unref(character).intelligence)} type="number" min="1" max="20" class="form-input" data-v-71e73ca1></div><div class="ability-score" data-v-71e73ca1><label data-v-71e73ca1>Wisdom</label><input${ssrRenderAttr("value", unref(character).wisdom)} type="number" min="1" max="20" class="form-input" data-v-71e73ca1></div><div class="ability-score" data-v-71e73ca1><label data-v-71e73ca1>Charisma</label><input${ssrRenderAttr("value", unref(character).charisma)} type="number" min="1" max="20" class="form-input" data-v-71e73ca1></div></div></div><div class="combat-stats" data-v-71e73ca1><h3 class="text-xl font-semibold mb-4" data-v-71e73ca1>Combat Stats</h3><div class="grid grid-cols-2 gap-4" data-v-71e73ca1><div class="stat" data-v-71e73ca1><label data-v-71e73ca1>Hit Points</label><input${ssrRenderAttr("value", unref(character).hitPoints)} type="number" min="1" class="form-input" data-v-71e73ca1></div><div class="stat" data-v-71e73ca1><label data-v-71e73ca1>Armor Class</label><input${ssrRenderAttr("value", unref(character).armorClass)} type="number" min="1" class="form-input" data-v-71e73ca1></div><div class="stat" data-v-71e73ca1><label data-v-71e73ca1>Initiative</label><input${ssrRenderAttr("value", unref(character).initiative)} type="number" min="1" class="form-input" data-v-71e73ca1></div><div class="stat" data-v-71e73ca1><label data-v-71e73ca1>Speed</label><input${ssrRenderAttr("value", unref(character).speed)} type="number" min="1" class="form-input" data-v-71e73ca1></div></div></div><div class="class-features" data-v-71e73ca1><h3 class="text-xl font-semibold mb-4" data-v-71e73ca1>Class Features</h3><div class="feature" data-v-71e73ca1><h4 class="font-semibold" data-v-71e73ca1>Hit Die</h4><p data-v-71e73ca1>d${ssrInterpolate(_ctx.selectedClass.hit_die)}</p></div><div class="feature" data-v-71e73ca1><h4 class="font-semibold" data-v-71e73ca1>Saving Throws</h4><ul class="list-disc pl-5" data-v-71e73ca1><!--[-->`);
        ssrRenderList(_ctx.selectedClass.saving_throws, (save) => {
          _push(`<li data-v-71e73ca1>${ssrInterpolate(save.name)}</li>`);
        });
        _push(`<!--]--></ul></div><div class="feature" data-v-71e73ca1><h4 class="font-semibold" data-v-71e73ca1>Proficiencies</h4><ul class="list-disc pl-5" data-v-71e73ca1><!--[-->`);
        ssrRenderList(_ctx.selectedClass.proficiencies, (prof) => {
          _push(`<li data-v-71e73ca1>${ssrInterpolate(prof.name)}</li>`);
        });
        _push(`<!--]--></ul></div></div></div></div><div class="mt-6 text-center" data-v-71e73ca1><button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded" data-v-71e73ca1> Salvar personagem </button></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CharacterSheet.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-71e73ca1"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useFetch("https://www.dnd5eapi.co/api/2014/classes", "$9wc9U2muoD")), __temp = await __temp, __restore(), __temp);
    const classes = computed(() => {
      var _a;
      return (_a = data.value) == null ? void 0 : _a.results;
    });
    const selectedClass = ref(null);
    const handleSaveCharacter = async (characterData) => {
      try {
        const result = await $fetch("/api/characters", {
          method: "POST",
          body: characterData
        });
        alert("Personagem salvo com sucesso!");
        selectedClass.value = null;
      } catch (error) {
        console.error("Error saving character:", error);
        alert("Falha ao salvar personagem. Por favor, tente novamente.");
      }
    };
    const getClassColor = (className) => {
      const colorMap = {
        barbarian: "#8B0000",
        // Dark red
        bard: "#9370DB",
        // Medium purple
        cleric: "#FFD700",
        // Gold
        druid: "#228B22",
        // Forest green
        fighter: "#A52A2A",
        // Brown
        monk: "#FFA500",
        // Orange
        paladin: "#4169E1",
        // Royal blue
        ranger: "#006400",
        // Dark green
        rogue: "#4B0082",
        // Indigo
        sorcerer: "#FF1493",
        // Deep pink
        warlock: "#800080",
        // Purple
        wizard: "#1E90FF"
        // Dodger blue
      };
      return colorMap[className.toLowerCase()] || "#808080";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CharacterSheet = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen" }, _attrs))} data-v-ca84e87d><h1 class="text-3xl font-bold mb-6 text-center text-gray-900 font-fantasy mt-4" data-v-ca84e87d>Escolha sua classe</h1><div class="classes-grid" data-v-ca84e87d><!--[-->`);
      ssrRenderList(unref(classes), (item) => {
        _push(`<div class="class-card" style="${ssrRenderStyle({ backgroundColor: getClassColor(item.name) })}" data-v-ca84e87d><h1 data-v-ca84e87d>${ssrInterpolate(item.name)}</h1></div>`);
      });
      _push(`<!--]--></div>`);
      if (unref(selectedClass)) {
        _push(ssrRenderComponent(_component_CharacterSheet, {
          "selected-class": unref(selectedClass),
          onSave: handleSaveCharacter
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mt-6 text-center space-x-4" data-v-ca84e87d><button class="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded" data-v-ca84e87d> Ver fichas de personagens </button></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ficha/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ca84e87d"]]);
export {
  index as default
};
//# sourceMappingURL=index-7aCvNmNe.js.map
