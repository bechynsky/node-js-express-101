var express = require('express');
var router = express.Router();

var dbpwd = process.env.DB_PASSWORD;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', databasepassword: dbpwd });
});

module.exports = router;
