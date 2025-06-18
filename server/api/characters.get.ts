import db from '~/server/utils/db'

interface CharacterSheet {
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
    const stmt = db.prepare(`
      SELECT * FROM characterSheets 
      ORDER BY created_at DESC
    `)
    
    const characters = stmt.all() as CharacterSheet[]
    
    // Parse JSON fields back to objects
    const parsedCharacters = characters.map(char => ({
      ...char,
      proficiencies: JSON.parse(char.proficiencies || '[]'),
      saving_throws: JSON.parse(char.saving_throws || '[]')
    }))

    return {
      success: true,
      characters: parsedCharacters
    }

  } catch (error) {
    console.error('Error fetching character sheets:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch character sheets'
    })
  }
}) 