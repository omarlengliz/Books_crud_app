const Book = require("../models/Book");

const getAllBooks = async (req, res,next) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    next(error);
  }
};
const createBook = async (req, res,next) => {
  const { title, description, publicationYear, pageCount, country ,author} = req.body;
  try {
    if (!title || !author) {
      const err = new Error("title and author  are required ");
      err.status = 400;
      throw err;
    }
    if(pageCount && isNaN(pageCount)){
        const err = new Error("pageCount should be a number");
        err.status = 400;
        throw err;
    }else{
        if(pageCount<10)
        {
            const err = new Error("pageCount should be greater than 10");
            err.status = 400;
            throw err ;             
        }
    }
    if(isNaN(publicationYear)){
        const err = new Error("publication Year should be a number");
        err.status = 400;
        throw err ;             
    }
    if(country.toLowerCase()==="israel" || country==="Israël") {
        const err = new Error("Israel  not found !  #free_palestine  ");
        err.status = 404;
        throw err ;             
    }
    const book = await Book.create({
      title,
      author,
      description,
      publicationYear,
      pageCount,
      country,
    });
    res.status(201).json(book);
  } catch (error) {
    next(error);
  }
};

const findBookById=async(res,req,next) =>{
    try {
        const book = await Book.findById(req.params.id);
        if(book)
        res.status(200).json(book);
        else
          {
            const err = new Error("Book Not Found");
            err.statusCode = 404;
            throw err;
          }
      } catch (error) {
        next(error);
      }
    };
const updateBookById=async(req,res,next) =>{
   try {
        console.log(req.params)

       const book = await Book.findById(req.params.id);
        if(book)
        {
            const { title, description, publicationYear, pageCount, country,author } = req.body;
            book.title=title || book.title ;
            book.description=description ||   book.description ;
            book.publicationYear=publicationYear || book.publicationYear;
            book.pageCount=pageCount ||book.pageCount ;
            book.country=country ||   book.country;
            book.author=author || book.author ;
            const updatedBook = await book.save();
            res.status(200).json(updatedBook);
        }
        else
          {
            const err = new Error("Book Not Found");
            err.statusCode = 404;
            throw err;
          }
      } catch (error) {
        next(error);
      }
    }
const deleteBookById=async(req,res,next) =>{
    try {
        const book = await Book.findById(req.params.id);
        if(book)
        {
            await book.deleteOne({_id: req.params.id });
            res.status(200).json({message:"Book Removed"});
        }
        else
          {
            const err = new Error("Book Not Found");
            err.statusCode = 404;
            throw err;
          }
      } catch (error) {
        next(error);
      }
    }

module.exports={deleteBookById , updateBookById , getAllBooks , findBookById , createBook}
    



