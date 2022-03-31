const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please, add title.']
  },
  desc: {
    type: String,
    required: [true, 'Please, add a description.']
  }
}, {
  timestamps: true
});

bookSchema.set('toObject', {virtuals: true});
bookSchema.set('toJSON', {virtuals: true});

module.exports = mongoose.model('Book', bookSchema);