

const login = async (req, res, next) => {
    // write the login logic here
    res.status(200).json({
        success: true,
        data: [],
        message: "These is no data for now"
    })
}

module.exports = {login}