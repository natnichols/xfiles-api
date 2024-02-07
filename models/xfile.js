import mongoose from 'mongoose'

const Schema = mongoose.Schema

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
  quotes: [{
    type: Schema.Types.ObjectId,
    ref: 'Quote'
  }]
},
  { timestamps: true }
)

const Xfile = mongoose.model('Xfile', xfileSchema)

export {
  Xfile
}