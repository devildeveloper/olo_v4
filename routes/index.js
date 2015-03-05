var express = require('express');
var router = express.Router();
var MemJS = require('memjs').Client

memjs=MemJS.create();

/* GET home page. */
router.get('/', function(req, res, next) {

    res.render('index', { title: 'Express' });

});

module.exports = router;
