import { defineEventHandler, getRouterParam, createError } from 'file:///home/joaocorreia/dndsheet/node_modules/h3/dist/index.mjs';
import { d as db } from '../../../_/db.mjs';
import 'file:///home/joaocorreia/dndsheet/node_modules/better-sqlite3/lib/index.js';
import 'node:path';

const _id__get = defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, "id");
    if (!id) {
      throw createError({
        statusCode: 400,
        statusMessage: "ID is required"
      });
    }
    const characterId = parseInt(id);
    const character = db.prepare(`
      SELECT * FROM characterSheets WHERE id = ?
    `).get(characterId);
    if (!character) {
      throw createError({
        statusCode: 404,
        statusMessage: "Character not found"
      });
    }
    const parsedCharacter = {
      ...character,
      proficiencies: JSON.parse(character.proficiencies || "[]"),
      saving_throws: JSON.parse(character.saving_throws || "[]")
    };
    return {
      success: true,
      character: parsedCharacter
    };
  } catch (error) {
    console.error("Error fetching character:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Internal server error"
    });
  }
});

export { _id__get as default };
//# sourceMappingURL=_id_.get.mjs.map
