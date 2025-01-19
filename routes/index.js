var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/TheLightningThief', function(req, res, next) {
  res.send("<h1>Похититель молний'</h1>")
  });
router.get('/TheSeaOfMonsters', function(req, res, next) {
  res.send("<h1>Море чудовищ'</h1>")
  });
router.get('/TheTitansCurse', function(req, res, next) {
  res.send("<h1>Проклятье титана'</h1>")
  });  
module.exports = router;
