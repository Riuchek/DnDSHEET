import { defineEventHandler, readBody, createError } from 'file:///home/joaocorreia/dndsheet/node_modules/h3/dist/index.mjs';
import { d as db } from '../../../_/db.mjs';
import 'file:///home/joaocorreia/dndsheet/node_modules/better-sqlite3/lib/index.js';
import 'node:path';

const create_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { username, password } = body;
  if (!username || !password) {
    throw createError({
      statusCode: 400,
      message: "Username and password are required"
    });
  }
  const existingUser = db.prepare("SELECT * FROM users WHERE username = ?").get(username);
  if (existingUser) {
    throw createError({
      statusCode: 409,
      message: "Username already exists"
    });
  }
  const result = db.prepare("INSERT INTO users (username, password) VALUES (?, ?)").run(username, password);
  const newUser = db.prepare("SELECT * FROM users WHERE id = ?").get(result.lastInsertRowid);
  return {
    success: true,
    user: {
      id: newUser.id,
      username: newUser.username
    }
  };
});

export { create_post as default };
//# sourceMappingURL=create.post.mjs.map
