const Category = require("../models/Category");


const getAllCategories = async (req, res,next) => {
    try {
      const books = await Category.find();
      res.status(200).json(books);
    } catch (error) {
      next(error);
    }
  };

  const createCategory = async (req, res,next) => {
    try {
      if (!req.body.label) {
        const err = new Error("label is required ");
        err.status = 400;
        throw err;
      }
      
     
      console.log("zzz")
      const category = await Category.create({
        label:req.body.label
    
      });
      res.status(201).json(category);
    } catch (error) {
      next(error);
    }
  };
  

module.exports={
    getAllCategories,
    createCategory
}