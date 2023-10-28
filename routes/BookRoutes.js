const express = require('express');
const router = express.Router();
const {getAllBooks,createBook,findBookById,updateBookById, deleteBookById}=require('../controllers/BookController');
const { isLogged, isAdmin } = require('../middleware/AuthMiddleware');



router.get('/',isLogged,getAllBooks);
router.post('/',isLogged,isAdmin,createBook);

router.get('/:id',isLogged , findBookById);
router.delete('/:id',isLogged,isAdmin,deleteBookById);
router.put('/:id',isLogged,isAdmin,updateBookById);



module.exports = router;
