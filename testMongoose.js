const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');
var Book = require('./models/book.js').Book
var book = new Book({
title: "Похититель молний",
nick: "TheLightningThief",
})
book.save();
