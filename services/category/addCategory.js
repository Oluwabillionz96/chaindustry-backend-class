const Category = require("../../models/Category");
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

module.exports =  addCategory;
