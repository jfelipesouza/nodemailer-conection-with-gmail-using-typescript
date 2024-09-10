var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/utils/escolhaAleatoria.ts
var escolhaAleatoria_exports = {};
__export(escolhaAleatoria_exports, {
  selectThemes: () => selectThemes
});
module.exports = __toCommonJS(escolhaAleatoria_exports);

// src/utils/sort.ts
var sort = (arr) => {
  return arr.sort(() => Math.random() - 0.5);
};

// src/utils/escolhaAleatoria.ts
var selectThemes = (THEMES, MEMBERS) => {
  let result = [];
  const members = sort(MEMBERS);
  const themes = sort(THEMES);
  for (let i = 0; i < members.length; i++) {
    const member = members[i];
    const theme = themes[i];
    result.push({
      theme,
      ...member
    });
  }
  return result;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  selectThemes
});
