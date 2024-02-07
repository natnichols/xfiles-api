import { Character } from '../models/character.js'

async function createCharacter(req, res) {
  try {
    const character = await Character.create(req.body)
    res.json(character)
  } catch (err) {
    console.log(`🚨`, err)
    res.status(500).json(`🚨`, err)
  }
}

export {
  createCharacter as create,
}