var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
  firstName: {type: String, reuired: true},
  lastName: {type: String, reuired: true},
  password: {type: String, reuired: true},
  email: {type: String, reuired: true, unique: true},
  messages: [{type: Schema.Types.ObjectId, ref: 'Message' }]
  //to assure that messages are handled correctly
  //by mongoose and are given ids
  //ref: says that this property has a connection to another model
//ref to Message model
});

//extra mail validation
schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', schema);
//the collection
//name is expected to be users

//change code
