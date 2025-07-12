const Shop = require("../../models/shop");
const ErrorResponse = require("../../utils/ErrorResponse");

const editShop = async (req, res, next) => {
  const { name, location, brand, shopId } = req.body;
  const userId = req.user._id;
  const data = {
    name,
    location,
    brand,
  };

  const check = await Shop.findById(shopId);
  if (!check) {
    throw new ErrorResponse(`The shop ${shopId} does not exist`, 400);
  }
  if (!check.user == userId) {
    throw new ErrorResponse(`The shop ${shopId} does not belong to you`, 400);
  }
  check.name = name;
  check.location = location;
  check.brand = brand;
  return await check.save();
};

module.exports = editShop;
