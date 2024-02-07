import { Router } from 'express'
import * as charactersCtrl from '../controllers/characters.js'

const router = Router()

// ========== Public Routes ===========
// GET to localhost:3001/api/characters

// POST to localhost:3001/api/characters
router.post('/', charactersCtrl.create)
// DELETE to localhost:3001/api/characters/:characterId


export {
  router
}