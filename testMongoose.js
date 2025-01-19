const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');
const Book = mongoose.model('Book', { name: String });
const Percy = new Book({ name: 'Повелитель молний' });
Percy.save().then(() => console.log('Перси'));
