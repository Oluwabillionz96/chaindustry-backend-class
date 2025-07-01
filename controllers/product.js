const Product = require("../models/product")
const ErrorResponse = require("../utils/ErrorResponse")
// add product
const addProduct = async ( req, res, next) => {
    const { name, description, quantity, price, images,  userId, categoryId } = req.body
    const data = {
        name,
        description,
        quantity,
        price,
        slug: images,
        userId,
        categoryId
    }

    const check = await Product.findOne({name:name, user: userId})
    if(check){
        throw new ErrorResponse(`The product ${data.name} already exist`, 400)
    }else{
        await Product.create(data)
        res.status(201).json({
            success: true,
            data,
            message: "Created successfully"
        });
    }
}

// edit product
const editProduct = async (req, res, next) => {
  const { name, description, quantity, price, images } = req.body;
  const data = {
    name,
    description,
    quantity,
    price,
    slug: images,
  };
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  await Product.findByIdAndUpdate(req.params.id, data);

  res
    .status(201)
    .json({ success: true, data, message: "Updated Successfully" });
};

// view product
const viewProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(404).json({ message: "No product found" });
  }

  res.status(200).json({ success: true, product });
};

// view products
const viewProducts = async (req, res, next) => {
  const product = await Product.find();

  if (!product) {
    return res.status(404).json({ message: "No product found" });
  }

  res.status(200).json({ success: true, product });
};

// delete product
const deleteProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  await Product.findByIdAndDelete(req.params.id);

  res.status(201).json({ success: true, message: "Deleted Successfully" });
};

module.exports = { addProduct, editProduct, viewProduct, viewProducts, deleteProduct }