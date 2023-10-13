const express = require('express');
const router = express.Router();
const {getAllBooks,createBook,findBookById,updateBookById, deleteBookById}=require('../controllers/BookController')
router.get('/',getAllBooks);
router.post('/',createBook);

router.get('/:id',findBookById);
router.delete('/:id',deleteBookById);
router.put('/:id',updateBookById);
module.exports = router;
