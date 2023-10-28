const express = require("express");
const { isLogged, isAdmin } = require("../middleware/AuthMiddleware");
const { getAllAuthors, createAuthor } = require("../controllers/AuthorController");

const router = express.Router()
router.get("/", isLogged,isAdmin, getAllAuthors ) ; 
router.post("/",  isLogged,isAdmin, createAuthor ) ; 


module.exports=router;