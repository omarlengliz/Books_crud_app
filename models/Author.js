const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
  
  firstName:{
    type:String,
    required:true
  
  },
  lastName:{
    type:String,
    required:true
  },
  nationality : {
    type:String,    
    default:"N/A"
  }
});

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;
