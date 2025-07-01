const Category = require("../models/Category")
// add Category
const addCategory = async ( req, res, next) => {
    const { name, description, userId } = req.body
    const data = {
        name,
        description,
        userId
    }

    const check = await Category.findOne({name:name, user:userId})
    if(check){
        res.status(400).json({
            error: true,
            data,
            message: `The Category ${data.name} already exist`
        });
    }else{
        await Category.create(data)
        res.status(201).json({
            success: true,
            data,
            message: "Created successfully"
        });
    }
}

// edit Category
const editCategory = async ( req, res, next) => {

}

// view Category
const viewCategory = async ( req, res, next) => {

}

// view Categorys
const viewCategorys = async ( req, res, next) => {

}

// delete Category
const deleteCategory = async ( req, res, next) => {

}


module.exports = { addCategory, editCategory, viewCategory, viewCategorys, deleteCategory }