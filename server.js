// import npm packages
import 'dotenv/config.js'
import express from 'express'
import logger from 'morgan'
import cors from 'cors'
import './config/database.js'

// import routers
import { router as indexRouter } from './routes/index.js'
import { router as xfilesRouter } from './routes/xfiles.js'
import { router as charactersRouter } from './routes/characters.js'

// create the express app
const app = express()

// basic middleware
app.use(cors())
app.use(logger('dev'))
app.use(express.json())

// mount imported routes
app.use('/', indexRouter)
app.use('/api/xfiles', xfilesRouter)
app.use('/api/characters', charactersRouter)

// handle 404 errors
app.use(function (req, res, next) {
  res.status(404).json({ err: 'Not found' })
})

// handle all other errors
app.use(function (err, req, res, next) {
  res.status(err.status || 500).json({ err: err.message })
})

export { app }
