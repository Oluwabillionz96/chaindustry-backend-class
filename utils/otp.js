const generateOTP = function(length = 6){
    let otp = ''
    const digits = "0123456789"
    for (let v6 = 0; v6 < length; v6++) {
        otp = otp + digits[Math.floor(Math.random() * 10)]
    }
    return otp
}

module.exports = generateOTP