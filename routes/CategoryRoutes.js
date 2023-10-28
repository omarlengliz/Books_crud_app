const express = require("express");
const { getAllCategories, createCategory } = require("../controllers/CategoryController");
const { isLogged, isAdmin } = require("../middleware/AuthMiddleware");

const router = express.Router()
router.get("/", isLogged,isAdmin, getAllCategories ) ; 
router.post("/",  isLogged,isAdmin, createCategory ) ; 


module.exports=router;