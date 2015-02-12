var mongoose = require('mongoose');
var Schema = mongoose.Schema; 

var artSchema = new Schema({
	name : String, 
});

mongoose.model('posts', artSchema);