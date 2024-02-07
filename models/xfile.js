import mongoose from 'mongoose'

const Schema = mongoose.Schema

const quoteSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  character: [{
    type: Schema.Types.ObjectId,
    ref: 'Character'
  }],
  episode: { 
    type: Schema.Types.ObjectId, 
    ref: 'Xfile' 
  },
}, {
  timestamps: true
})

const xfileSchema = new Schema({
  name: { type: String, required: true },
  season: {
    type: Number,
    enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    required: true
  },
  episodeNum: { type: Number, required: true },
  releaseDate: { type: Date, required: true },
  summary: String,
  hasMulder: Boolean,
  hasScully: Boolean,
  characters: [{
    type: Schema.Types.ObjectId,
    ref: 'Character'
  }],
  quotes: [quoteSchema]
},
  { timestamps: true }
)

const Xfile = mongoose.model('Xfile', xfileSchema)

export {
  Xfile
}