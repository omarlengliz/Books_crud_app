const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    label: {
      type: String,
      enum: ['Horror', 'Mystery', 'Science Fiction', 'Fantasy', 'Romance', 'Non-Fiction', 'Other'],
      required: true,
    },
  });
  
  const Category = mongoose.model('Category', categorySchema);
  
  module.exports = Category;