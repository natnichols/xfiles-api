import { Router } from 'express'
import * as xfilesCtrl from '../controllers/xfiles.js'

const router = Router()

// ========== Public Routes ===========
// GET to localhost:3001/api/xfiles

// POST to localhost:3001/api/xfiles
router.post('/', xfilesCtrl.create)
// DELETE to localhost:3001/api/xfiles/:xfileId


export {
  router
}