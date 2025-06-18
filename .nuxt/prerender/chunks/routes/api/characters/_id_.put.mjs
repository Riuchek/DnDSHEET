import { defineEventHandler, getRouterParam, createError, readBody } from 'file:///home/joaocorreia/dndsheet/node_modules/h3/dist/index.mjs';
import { d as db } from '../../../_/db.mjs';
import 'file:///home/joaocorreia/dndsheet/node_modules/better-sqlite3/lib/index.js';
import 'node:path';

const _id__put = defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, "id");
    if (!id) {
      throw createError({
        statusCode: 400,
        statusMessage: "ID is required"
      });
    }
    const characterId = parseInt(id);
    const body = await readBody(event);
    const existingCharacter = db.prepare(
      "SELECT id FROM characterSheets WHERE id = ?"
    ).get(characterId);
    if (!existingCharacter) {
      throw createError({
        statusCode: 404,
        statusMessage: "Character not found"
      });
    }
    const stmt = db.prepare(`
      UPDATE characterSheets SET 
        name = ?, level = ?, race = ?, background = ?, alignment = ?, 
        experience = ?, strength = ?, dexterity = ?, constitution = ?, 
        intelligence = ?, wisdom = ?, charisma = ?, hitPoints = ?, 
        armorClass = ?, initiative = ?, speed = ?, class_name = ?, 
        class_hit_die = ?, proficiencies = ?, saving_throws = ?, 
        updated_at = DATETIME('now')
      WHERE id = ?
    `);
    stmt.run(
      body.name,
      body.level,
      body.race,
      body.background,
      body.alignment,
      body.experience,
      body.strength,
      body.dexterity,
      body.constitution,
      body.intelligence,
      body.wisdom,
      body.charisma,
      body.hitPoints,
      body.armorClass,
      body.initiative,
      body.speed,
      body.class_name,
      body.class_hit_die,
      JSON.stringify(body.proficiencies),
      JSON.stringify(body.saving_throws),
      characterId
    );
    return {
      success: true,
      message: "Character updated successfully"
    };
  } catch (error) {
    console.error("Error updating character:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Internal server error"
    });
  }
});

export { _id__put as default };
//# sourceMappingURL=_id_.put.mjs.map
