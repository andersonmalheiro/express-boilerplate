const mongoose = require('mongoose');
const { schema } = require('./schema');

schema.pre('save', () => {
  // logic here
});


const SomeModel = mongoose.model('SomeModel', schema);
module.exports = { SomeModel };