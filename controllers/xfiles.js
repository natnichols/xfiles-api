import { Xfile } from '../models/xfile.js'

export async function create(req, res) {
  try {
    const xfile = await Xfile.create(req.body)
    res.json(xfile)
  } catch (err) {
    console.log(`🚨`, err)
    res.status(500).json(`🚨`, err)
  }
}

export async function index(req, res) {
  try {
    const xfiles = await Xfile.find({}).sort({ createdAt: 'desc' })
    res.json(xfiles)
  } catch (err) {
    console.log(`🚨`, err)
    res.status(500).json(`🚨`, err)
  }
}

async function deleteXfile(req, res) {
  try {
    const xfile = await Xfile.findByIdAndDelete(req.params.xfileId)
    res.json(xfile)
  } catch (err) {
    console.log(`🚨`, err)
    res.status(500).json(`🚨`, err)
  }
}

export {
  deleteXfile as delete,
}