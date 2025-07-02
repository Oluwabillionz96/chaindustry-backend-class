const addProduct = require("../services/product/addProduct");
const viewProduct = require("../services/product/viewProduct");

// add product
module.exports.addProduct = async ( req, res, next) => {
    const result = await addProduct(req, res, next)
    res.status(201).json({
        success: true,
        message: "Created successfully",
        data: result,
    });
}

// edit product
// const editProduct = async (req, res, next) => {
//   const { name, description, quantity, price, images } = req.body;
//   const data = {
//     name,
//     description,
//     quantity,
//     price,
//     slug: images,
//   };
//   const product = await Product.findById(req.params.id);
//   if (!product) {
//     return res.status(404).json({ message: "Product not found" });
//   }

//   await Product.findByIdAndUpdate(req.params.id, data);

//   res
//     .status(201)
//     .json({ success: true, data, message: "Updated Successfully" });
// };

// view product
module.exports.viewProduct = async (req, res, next) => {
    const result = await viewProduct(req, res, next)
    res.status(201).json({
        success: true,
        message: "Products found",
        data: result,
    });
}

// // view products
// const viewProducts = async (req, res, next) => {
//   const product = await Product.find();

//   if (!product) {
//     return res.status(404).json({ message: "No product found" });
//   }

//   res.status(200).json({ success: true, product });
// };

// // delete product
// const deleteProduct = async (req, res, next) => {
//   const product = await Product.findById(req.params.id);
//   if (!product) {
//     return res.status(404).json({ message: "Product not found" });
//   }

//   await Product.findByIdAndDelete(req.params.id);

//   res.status(201).json({ success: true, message: "Deleted Successfully" });
// };

// module.exports = { addProduct, editProduct, viewProduct, viewProducts, deleteProduct }