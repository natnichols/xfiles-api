import { Character } from '../models/character.js'
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

export async function createQuote(req, res) {
  try {
    const xfile = await Xfile.findById(req.params.xfileId)
    xfile.quotes.push(req.body)
    await xfile.save()

    // find newly created quote
    const newQuote = xfile.quotes[xfile.quotes.length - 1]
    // temporarily append character object to newQuote.character
    const character = await Character.findById(req.character.name)
    newQuote.character = character
    // temporarily append xfile object to newQuote.episode
    const episode = await Xfile.findById(req.episode.name)
    newQuote.episode = episode
    // respond with new quote
    res.json(newQuote)
  } catch (err) {
    console.log(`🚨`, err)
    res.status(500).json(`🚨`, err)
  }
}

export {
  deleteXfile as delete,
}