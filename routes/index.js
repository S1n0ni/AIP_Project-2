var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/TheLightningThief', function(req, res, next) {
  res.render('book',{
    title:"Похититель молний",
    picture:"images/Lightning.jpg",
    desc:"Первая книга из пенталогии Рика Риордана 'Перси Джексон и Олимпийцы'"})
  });
router.get('/TheSeaOfMonsters', function(req, res, next) {
  res.render('book',{
    title:"Море чудовищ",
    picture:"images/Sea.jpg",
    desc:"Вторая книга из пенталогии Рика Риордана 'Перси Джексон и Олимпийцы'"})
  });
router.get('/TheTitansCurse', function(req, res, next) {
  res.render('book',{
    title:"Проклятье титана",
    picture:"images/Titan.jpg",
    desc: "Третья книга из пенталогии Рика Риордана 'Перси Джексон и Олимпийцы'"})
  });
router.get
module.exports = router;
