import { defineEventHandler, readBody, createError } from 'file:///home/joaocorreia/dndsheet/node_modules/h3/dist/index.mjs';
import { d as db } from '../../../_/db.mjs';
import 'file:///home/joaocorreia/dndsheet/node_modules/better-sqlite3/lib/index.js';
import 'node:path';

const login_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { username, password } = body;
  if (!username || !password) {
    throw createError({
      statusCode: 400,
      message: "Username and password are required"
    });
  }
  const user = db.prepare("SELECT * FROM users WHERE username = ? AND password = ?").get(username, password);
  if (!user) {
    throw createError({
      statusCode: 401,
      message: "Invalid credentials"
    });
  }
  return {
    success: true,
    user: {
      id: user.id,
      username: user.username
    }
  };
});

export { login_post as default };
//# sourceMappingURL=login.post.mjs.map
