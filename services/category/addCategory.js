const Category = require("../../models/Category");
const Product = require("../../models/product");
const Shop = require("../../models/shop");
const ErrorResponse = require("../../utils/ErrorResponse");

const addCategory = async (req, res, next) => {
  const { name, description, userId, shop } = req.body;
  const data = {
    name,
    description,
    user: userId,
    shop,
  };
  const check = await Category.findOne({ name: name, user: userId });
  if (check) {
    throw new ErrorResponse(`The category ${data.name} already exist`, 400);
  }

  return await Category.create(data);
};

const editCategory = async (req, res, next) => {
  const { name, description, userId, id } = req.body;
  const check = await Category.findOne({ _id: id });
  if (!check) {
    throw new ErrorResponse(
      `The category you are lokking for doesn't exsist`,
      404
    );
  }

  if (check.user != userId) {
    console.log(check.user, userId);
    throw new ErrorResponse(`You have no authority to edit this category`, 403);
  }
  if (name) check.name = name;
  if (description) check.description = description;

  return await check.save();
};

const viewCategory = async (req, res, next) => {
  const { id } = req.params;

  const check = await Category.findById(id);
  if (!check) {
    throw new ErrorResponse(
      `The category you are lokking for doesn't exsist`,
      404
    );
  }

  return check;
};

const viewCategories = (req, res, next) => {
  const limit = Number(req.query.limit);
  const shop = req.query.shop;
  let category = Category.find();

  if (shop) {
    category = Category.find(shop);
  }
  if (!isNaN(limit)) {
    category = category.limit(limit);
  }

  return category;
};

module.exports = { addCategory, editCategory, viewCategory, viewCategories };
