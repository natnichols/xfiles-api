import { Xfile } from '../models/xfile.js'

async function create(req, res) {
  try {
    const xfile = await Xfile.create(req.body)
    res.json(xfile)
  } catch (err) {
    console.log(`🚨`, err)
    res.status(500).json(`🚨`, err)
  }
}

export {
  create
}