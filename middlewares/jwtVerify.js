const User = require("../models/user")
const ErrorResponse = require("../utils/ErrorResponse")
const jwt = require("jsonwebtoken")

const jwtVerify = async (req, res, next) => {
    let token
    if(!req.headers.authorization){
        throw new ErrorResponse("Bad Request", 400)
    }

    token = req.headers.authorization.split(" ")[1]
    if(!token){
        throw new ErrorResponse("Bad Authourization header", 400)
    }
    // console.log(token)

    try {
        var decoded = jwt.verify(token, process.env.JWT_SECRET);
        // console.log(decoded.id)
        const user = await User.findById(decoded.id).select('-password')
        if(!user){
            throw new ErrorResponse("User not found", 400)
        }
        user.lastLogin = Date.now()
        await user.save()
    
        req.user = user
        next()
    }catch (err){
        throw new ErrorResponse(err.message, 400)
    }
}

module.exports = jwtVerify