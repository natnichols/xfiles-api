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
  // releaseDate: Date,
  summary: String,
  hasMulder: Boolean,
  hasScully: Boolean,
},
  { timestamps: true }
)

const Xfile = mongoose.model('Xfile', xfileSchema)

export {
  Xfile
}