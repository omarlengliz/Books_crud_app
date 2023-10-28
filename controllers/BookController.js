const Book = require("../models/Book");

const getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.find().populate('author').populate('category');
    res.status(200).json(books);
  } catch (error) {
    next(error);
  }
};

const createBook = async (req, res, next) => {
  const { title, description, publicationYear, pageCount, country, author, category } = req.body;

  try {
    if (!title || !author) {
      const err = new Error("Title and author are required");
      err.status = 400;
      throw err;
    }

    if (pageCount && isNaN(pageCount)) {
      const err = new Error("pageCount should be a number");
      err.status = 400;
      throw err;
    } else if (pageCount < 10) {
      const err = new Error("pageCount should be greater than 10");
      err.status = 400;
      throw err;
    }

    if (isNaN(publicationYear)) {
      const err = new Error("publication Year should be a number");
      err.status = 400;
      throw err;
    }

    if (country.toLowerCase() === "israel" || country === "Israël") {
      const err = new Error("Israel not found! #free_palestine");
      err.status = 404;
      throw err;
    }

    const book = await Book.create({
      title,
      description,
      publicationYear,
      pageCount,
      country,
      author, // This should be the author's ID
      category, // An array of category IDs
    });

    res.status(201).json(book);
  } catch (error) {
    next(error);
  }
};

const findBookById = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id).populate('author').populate('categories');
    if (book) {
      res.status(200).json(book);
    } else {
      const err = new Error("Book Not Found");
      err.statusCode = 404;
      throw err;
    }
  } catch (error) {
    next(error);
  }
};

const updateBookById = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);

    if (book) {
      const { title, description, publicationYear, pageCount, country, author, categories } = req.body;

      // Update book properties if provided, otherwise keep the existing values
      book.title = title || book.title;
      book.description = description || book.description;
      book.publicationYear = publicationYear || book.publicationYear;
      book.pageCount = pageCount || book.pageCount;
      book.country = country || book.country;
      book.author = author || book.author;
      book.categories = categories || book.categories;

      const updatedBook = await book.save();
      res.status(200).json(updatedBook);
    } else {
      const err = new Error("Book Not Found");
      err.statusCode = 404;
      throw err;
    }
  } catch (error) {
    next(error);
  }
};

const deleteBookById = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);
    if (book) {
      await book.deleteOne({ _id: req.params.id });
      res.status(200).json({ message: "Book Removed" });
    } else {
      const err = new Error("Book Not Found");
      err.statusCode = 404;
      throw err;
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { deleteBookById, updateBookById, getAllBooks, findBookById, createBook };
