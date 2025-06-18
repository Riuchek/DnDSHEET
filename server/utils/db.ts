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

const defaultUser = db.prepare('SELECT * FROM users WHERE username = ?').get('player')
if (!defaultUser) {
  db.prepare('INSERT INTO users (username, password) VALUES (?, ?)').run('player', 'dragon')
}

export default db 