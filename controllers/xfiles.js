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

async function index(req, res) {
  try {
    const xfiles = await Xfile.find({}).sort({ createdAt: 'desc' })
    res.json(xfiles)
  } catch (err) {
    console.log(`🚨`, err)
    res.status(500).json(`🚨`, err)
  }
}

export {
  create,
  index
}