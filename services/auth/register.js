const User = require("../../models/user")
const sendMail = require("../../utils/mail")

const register = async (req) => {
    const { username, email, password, referredBy = null } = req.body
    const data = {
        username, email, password, referredBy
    }
    const result = await User.create(data)
    
    const options = {
        from: process.env.MAILSENDER,
        to: email,
        subject: "Registration successful",
        html: "<div style='color: red; text-align: center; box-sizing: border-box; font-size:14px;'>Hello, welcome to our platform.</div>"
    }
    // send a mail
    const sMail = await sendMail(options)
    console.log(sMail)
    
    return result
}

module.exports = register