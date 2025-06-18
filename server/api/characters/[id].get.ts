import { defineEventHandler } from 'h3'
import db from '~/server/utils/db'

interface Character {
  id: number
  name: string
  level: number
  race: string
  background: string
  alignment: string
  experience: number
  strength: number
  dexterity: number
  constitution: number
  intelligence: number
  wisdom: number
  charisma: number
  hitPoints: number
  armorClass: number
  initiative: number
  speed: number
  class_name: string
  class_hit_die: number
  proficiencies: string
  saving_throws: string
  created_at: string
  updated_at: string
}

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
    
    // Get the character
    const character = db.prepare(`
      SELECT * FROM characterSheets WHERE id = ?
    `).get(characterId) as Character | undefined

    if (!character) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Character not found'
      })
    }

    // Parse JSON fields
    const parsedCharacter = {
      ...character,
      proficiencies: JSON.parse(character.proficiencies || '[]'),
      saving_throws: JSON.parse(character.saving_throws || '[]')
    }

    return {
      success: true,
      character: parsedCharacter
    }
  } catch (error) {
    console.error('Error fetching character:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal server error'
    })
  }
}) 