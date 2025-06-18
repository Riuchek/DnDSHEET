import { defineEventHandler } from 'h3'
import db from '~/server/utils/db'

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')
    
    if (!id) {
      throw createError({
        statusCode: 400,
        statusMessage: 'ID is required'
      })
    }

    const characterId = parseInt(id)
    
    // Check if character exists
    const existingCharacter = db.prepare(
      'SELECT id FROM characterSheets WHERE id = ?'
    ).get(characterId)

    if (!existingCharacter) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Character not found'
      })
    }

    // Delete the character
    db.prepare('DELETE FROM characterSheets WHERE id = ?').run(characterId)

    return {
      success: true,
      message: 'Character deleted successfully'
    }
  } catch (error) {
    console.error('Error deleting character:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal server error'
    })
  }
}) 