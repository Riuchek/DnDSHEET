import Database from 'better-sqlite3'
import { join } from 'path'

const db = new Database(join(process.cwd(), 'data.sqlite'))

db.pragma('foreign_keys = ON')


db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
  )
`)

db.exec(`
  CREATE TABLE IF NOT EXISTS characterSheets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    level INTEGER NOT NULL DEFAULT 1,
    race TEXT,
    background TEXT,
    alignment TEXT,
    experience INTEGER DEFAULT 0,
    strength INTEGER DEFAULT 10,
    dexterity INTEGER DEFAULT 10,
    constitution INTEGER DEFAULT 10,
    intelligence INTEGER DEFAULT 10,
    wisdom INTEGER DEFAULT 10,
    charisma INTEGER DEFAULT 10,
    hitPoints INTEGER DEFAULT 0,
    armorClass INTEGER DEFAULT 10,
    initiative INTEGER DEFAULT 0,
    speed INTEGER DEFAULT 30,
    class_name TEXT NOT NULL,
    class_hit_die INTEGER,
    proficiencies TEXT,
    saving_throws TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`)

export default db 