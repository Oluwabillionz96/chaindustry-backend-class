const Product = require("../models/product")
// add product
const addProduct = async ( req, res, next) => {
    const { name, description, quantity, price, images } = req.body
    const data = {
        name,
        description,
        quantity,
        price,
        slug: images
    }

    const check = await Product.findOne({name:name})
    if(check){
        res.status(400).json({
            error: true,
            data,
            message: `The product ${data.name} already exist`
        });
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
const editProduct = async ( req, res, next) => {

}

// view product
const viewProduct = async ( req, res, next) => {

}

// view products
const viewProducts = async ( req, res, next) => {

}

// delete product
const deleteProduct = async ( req, res, next) => {

}


module.exports = { addProduct, editProduct, viewProduct, viewProducts, deleteProduct }