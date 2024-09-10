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

// src/utils/date.ts
var date_exports = {};
__export(date_exports, {
  getNextWednesday: () => getNextWednesday
});
module.exports = __toCommonJS(date_exports);
var getNextWednesday = () => {
  const today = /* @__PURE__ */ new Date();
  const dayOfWeek = today.getDay();
  const daysUntilNextWednesday = (3 - dayOfWeek + 7) % 7 || 7;
  const nextWednesday = new Date(today);
  nextWednesday.setDate(today.getDate() + daysUntilNextWednesday);
  const day = String(nextWednesday.getDate()).padStart(2, "0");
  const month = String(nextWednesday.getMonth() + 1).padStart(2, "0");
  const year = nextWednesday.getFullYear();
  return `${day}/${month}/${year}`;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getNextWednesday
});
