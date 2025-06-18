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

  const user = db.prepare('SELECT * FROM users WHERE username = ? AND password = ?')
    .get(username, password)

  if (!user) {
    throw createError({
      statusCode: 401,
      message: 'Invalid credentials'
    })
  }

  return {
    success: true,
    user: {
      id: (user as { id: number }).id,
      username: (user as { username: string }).username
    }
  }
}) 