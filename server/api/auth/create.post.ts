import db from '~/server/utils/db'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { username, password } = body

  if (!username || !password) {
    throw createError({
      statusCode: 400,
      message: 'Username and password are required'
    })
  }

  // Check if username already exists
  const existingUser = db.prepare('SELECT * FROM users WHERE username = ?').get(username)
  
  if (existingUser) {
    throw createError({
      statusCode: 409,
      message: 'Username already exists'
    })
  }

  // Create new user
  const result = db.prepare('INSERT INTO users (username, password) VALUES (?, ?)').run(username, password)
  
  const newUser = db.prepare('SELECT * FROM users WHERE id = ?').get(result.lastInsertRowid)

  return {
    success: true,
    user: {
      id: (newUser as { id: number }).id,
      username: (newUser as { username: string }).username
    }
  }
}) 