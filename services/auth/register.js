const User = require("../../models/user")
const sendMailData = require("../../utils/mail")

const register = async (req) => {
    const { username, email, password, referredBy = null } = req.body
    const data = {
        username, email, password, referredBy
    }
    const result = await User.create(data)
    
    const options = {
        email,
        subject: "Verification Token",
        body: "Welcome to the website",
        message: "<div style='color: red; text-align: center; box-sizing: border-box; font-size:14px;'>Hello, welcome to our platform.</div>"
    }
    // send a mail
    await sendMailData(options)
    
    return result
}

module.exports = register