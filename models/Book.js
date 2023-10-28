const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"Author",
    required: true,
  },
  description: String,
  publicationYear: Number,
  pageCount: Number,
  country: String,
  category:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Category",
    required: true,
  
  }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
 