var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res){
	//render uses template
	var json = {}
	json.type = "get";
	
	res.send(json);
});

module.exports = router;
