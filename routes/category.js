const express = require("express");

const {
  addCategory,
  editCategory,
  viewCategories,
  viewCategory,
} = require("../controllers/category");
const validateCategoryData = require("../middlewares/categories/addCategoryValidation");

const route = express.Router();

route.post("/add", validateCategoryData, addCategory);
route.post("/edit", editCategory);
route.get("/", viewCategories);
route.get("/:id", viewCategory);
module.exports = route;
