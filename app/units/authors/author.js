const mongoose = require('mongoose');

const authorSchema = mongoose.Schema({
  name_last: {
    type: String,
    required: [true, 'Please, add last name.']
  },
  name_first: {
    type: String,
    required: [true, 'Please, add first name.']
  },
  affiliation: {
    type: String,
  }
}, {
  timestamps: true
});

authorSchema.set('toObject', {virtuals: true});
authorSchema.set('toJSON', {virtuals: true});

module.exports = mongoose.model('Author', authorSchema);