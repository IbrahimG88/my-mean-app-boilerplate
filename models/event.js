var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//Schema is an object
//my own schema, Schema instance
var schema = new Schema({
  //in the brackets we will define hoe the field
  //should look like
  //required means this field should never be empty
  //Schema.Types: means all types monf=goose know
  //ObjectId for this object, internal thing for mongoose
  content: {type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User' }
});

//content and user are keys for storage
//content:{mmm}    mmm is the value

module.exports = mongoose.model('Message', schema);

//mongoose.model expects 2 arguments:
//('Meassage'): is the name of that model
// then we may create a Message instance by: new Message();
//mongoose will use the model name as the collection name but in
// lowercase, plural form: messages
//2nd argument is: the schema we want to use for the model
