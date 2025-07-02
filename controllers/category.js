const addCategory = require("../services/category/addCategory");


module.exports.addCategory = async (req, res, next) => {
    const result = await addCategory(req, res, next)
    res.status(201).json({
        success: true,
        message: "Created successfully",
        data: result
    });
}