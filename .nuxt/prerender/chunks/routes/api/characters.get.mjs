import { defineEventHandler, createError } from 'file:///home/joaocorreia/dndsheet/node_modules/h3/dist/index.mjs';
import { d as db } from '../../_/db.mjs';
import 'file:///home/joaocorreia/dndsheet/node_modules/better-sqlite3/lib/index.js';
import 'node:path';

const characters_get = defineEventHandler(async (event) => {
  try {
    const stmt = db.prepare(`
      SELECT * FROM characterSheets 
      ORDER BY created_at DESC
    `);
    const characters = stmt.all();
    const parsedCharacters = characters.map((char) => ({
      ...char,
      proficiencies: JSON.parse(char.proficiencies || "[]"),
      saving_throws: JSON.parse(char.saving_throws || "[]")
    }));
    return {
      success: true,
      characters: parsedCharacters
    };
  } catch (error) {
    console.error("Error fetching character sheets:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to fetch character sheets"
    });
  }
});

export { characters_get as default };
//# sourceMappingURL=characters.get.mjs.map
