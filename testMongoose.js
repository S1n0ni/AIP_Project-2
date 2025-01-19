const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');

var schema = mongoose.Schema({ name: String })

schema.methods.perc = function() {
    console.log(this.name + " Перси Джексон")
}

const Book = mongoose.model('Book', schema);

const Percy = new Book({ name: 'Повелитель молний' });
Percy.save().then(() => Percy.perc());
