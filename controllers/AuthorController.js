const Author = require("../models/Author");


const getAllAuthors = async (req, res,next) => {
    try {
      const books = await Author.find();
      res.status(200).json(books);
    } catch (error) {
      next(error);
    }
  };

  const createAuthor = async (req, res,next) => {
    const { firstName, lastName, nationality} = req.body;
    try {
      if (!firstName || !lastName) {
        const err = new Error("FirstName and lastName  are required ");
        err.status = 400;
        throw err;
      }
      
     
      if(nationality    && nationality.toLowerCase()==="israel" || nationality.toLowerCase()==="israël") {
          const err = new Error("Israel  not found !  #free_palestine  ");
          err.status = 404;
          throw err ;             
      }
      const book = await Author.create({
        firstName,
        lastName,
    
        nationality,
      });
      res.status(201).json(book);
    } catch (error) {
      next(error);
    }
  };
  

module.exports={
    getAllAuthors,
    createAuthor
}