const mongoose = require('mongoose')

const StorySchema = new mongoose.Schema({
  fooditem: {
    type: String,
    
    trim: true,
  },
  fooddesc: {
    type: String,
    
  },
  status: {
    type: String,
    default: 'public',
    enum: ['public', 'private'],
  },
  address:{
    type: String,
    trim: true,
  },
  location:{
    type: String,
    trim: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('Story', StorySchema)