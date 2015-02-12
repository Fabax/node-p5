var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

mongoose.model('art', {name : String});

router.get('/', function(req, res){
	mongoose.model('art').find(function(err, artPieces){
		 res.send(artPieces);
	});
});



// return value of the whole file 
module.exports = router;
