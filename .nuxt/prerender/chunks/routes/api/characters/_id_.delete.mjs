import { defineEventHandler, getRouterParam, createError } from 'file:///home/joaocorreia/dndsheet/node_modules/h3/dist/index.mjs';
import { d as db } from '../../../_/db.mjs';
import 'file:///home/joaocorreia/dndsheet/node_modules/better-sqlite3/lib/index.js';
import 'node:path';

const _id__delete = defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, "id");
    if (!id) {
      throw createError({
        statusCode: 400,
        statusMessage: "ID is required"
      });
    }
    const characterId = parseInt(id);
    const existingCharacter = db.prepare(
      "SELECT id FROM characterSheets WHERE id = ?"
    ).get(characterId);
    if (!existingCharacter) {
      throw createError({
        statusCode: 404,
        statusMessage: "Character not found"
      });
    }
    db.prepare("DELETE FROM characterSheets WHERE id = ?").run(characterId);
    return {
      success: true,
      message: "Character deleted successfully"
    };
  } catch (error) {
    console.error("Error deleting character:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Internal server error"
    });
  }
});

export { _id__delete as default };
//# sourceMappingURL=_id_.delete.mjs.map
