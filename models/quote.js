import mongoose from 'mongoose'

const Schema = mongoose.Schema

const quoteSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  speaker: {
    // reference a 'character' model later?
    type: String,
    required: true
  },
  episode: { 
    type: Schema.Types.ObjectId, 
    ref: 'Xfile' 
  },
}, {
  timestamps: true
})

const Quote = mongoose.model('Quote', quoteSchema)

export {
  Quote
}