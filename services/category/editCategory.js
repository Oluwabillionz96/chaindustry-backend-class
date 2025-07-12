const Category = require("../../models/Category");
const ErrorResponse = require("../../utils/ErrorResponse");

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

module.exports = editCategory;
