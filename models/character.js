import mongoose from 'mongoose'

const Schema = mongoose.Schema

const characterSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  actor: {
    type: String,
    required: true
  },
  episodes: [{ 
    type: Schema.Types.ObjectId, 
    ref: 'Xfile' 
  }],
}, {
  timestamps: true
})

const Character = mongoose.model('Character', characterSchema)

export {
  Character
}