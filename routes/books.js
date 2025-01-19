var express = require('express');
var router = express.Router();
var Book = require('../models/book').Book;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с books');
});

/*Страница книг */
router.get("/:nick", async function(req, res, next) {
    var books = await Book.find({nick: req.params.nick});
    console.log(books)
    if(!books.length) return next(new Error("Нет такой книги"))
    var book = books[0];
    res.render('book', {
    title: book.title,
    picture: book.avatar,
    desc: book.desc
    })
    });
    

module.exports = router;