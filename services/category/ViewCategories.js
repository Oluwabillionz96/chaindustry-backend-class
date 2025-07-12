const Category = require("../../models/Category");

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

module.exports = viewCategories;
