const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
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

itemSchema.set('toObject', {virtuals: true});
itemSchema.set('toJSON', {virtuals: true});

module.exports = mongoose.model('Item', itemSchema);