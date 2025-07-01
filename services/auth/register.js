const User = require("../../models/user")

const register = async (req) => {
    const { username, email, password, referredBy = null } = req.body
    const data = {
        username, email, password, referredBy
    }
    const result = await User.create(data)
    
    return result
}

module.exports = register