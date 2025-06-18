import { defineEventHandler, readBody, createError } from 'file:///home/joaocorreia/dndsheet/node_modules/h3/dist/index.mjs';
import { d as db } from '../../_/db.mjs';
import 'file:///home/joaocorreia/dndsheet/node_modules/better-sqlite3/lib/index.js';
import 'node:path';

const characters_post = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    if (!body.name || !body.class_name) {
      throw createError({
        statusCode: 400,
        statusMessage: "Name and class_name are required"
      });
    }
    const characterData = {
      name: body.name,
      level: body.level || 1,
      race: body.race || "",
      background: body.background || "",
      alignment: body.alignment || "",
      experience: body.experience || 0,
      strength: body.strength || 10,
      dexterity: body.dexterity || 10,
      constitution: body.constitution || 10,
      intelligence: body.intelligence || 10,
      wisdom: body.wisdom || 10,
      charisma: body.charisma || 10,
      hitPoints: body.hitPoints || 0,
      armorClass: body.armorClass || 10,
      initiative: body.initiative || 0,
      speed: body.speed || 30,
      class_name: body.class_name,
      class_hit_die: body.class_hit_die || 6,
      proficiencies: JSON.stringify(body.proficiencies || []),
      saving_throws: JSON.stringify(body.saving_throws || [])
    };
    const stmt = db.prepare(`
      INSERT INTO characterSheets (
        name, level, race, background, alignment, experience,
        strength, dexterity, constitution, intelligence, wisdom, charisma,
        hitPoints, armorClass, initiative, speed, class_name, class_hit_die,
        proficiencies, saving_throws
      ) VALUES (
        ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
      )
    `);
    const result = stmt.run(
      characterData.name,
      characterData.level,
      characterData.race,
      characterData.background,
      characterData.alignment,
      characterData.experience,
      characterData.strength,
      characterData.dexterity,
      characterData.constitution,
      characterData.intelligence,
      characterData.wisdom,
      characterData.charisma,
      characterData.hitPoints,
      characterData.armorClass,
      characterData.initiative,
      characterData.speed,
      characterData.class_name,
      characterData.class_hit_die,
      characterData.proficiencies,
      characterData.saving_throws
    );
    return {
      success: true,
      id: result.lastInsertRowid,
      message: "Character sheet saved successfully"
    };
  } catch (error) {
    console.error("Error saving character sheet:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to save character sheet"
    });
  }
});

export { characters_post as default };
//# sourceMappingURL=characters.post.mjs.map
