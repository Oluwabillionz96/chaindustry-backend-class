const {
  addCategory,
  editCategory,
  viewCategory,
  viewCategories,
} = require("../services/category/addCategory");

module.exports.addCategory = async (req, res, next) => {
  const result = await addCategory(req, res, next);
  res.status(201).json({
    success: true,
    message: "Created successfully",
    data: result,
  });
};

module.exports.editCategory = async (req, res, next) => {
  const result = await editCategory(req, res, next);
  res.status(201).json({
    success: true,
    message: "Edited successfully",
    data: result,
  });
};

module.exports.viewCategory = async (req, res, next) => {
  const result = await viewCategory(req, res, next);
  res.status(200).json({
    success: true,
    data: result,
  });
};

module.exports.viewCategories = async (req, res, next) => {
    const result = await viewCategories(req, res, next);
    res.status(200).json({
      success: true,
      data: result,
    });
};
