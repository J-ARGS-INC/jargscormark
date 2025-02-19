const jsonwebtoken = require("jsonwebtoken");
const authenticate = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) return res.status(400).json("Authorization Token Required");
    const token = authorization.split(" ")[1];
    try {
        const { id } = jsonwebtoken.verify(token, process.env.JWT_SECRET)
        req.user = id;
        next()
    } catch (err) {
        return res.status(400).json("Invalid Authorization Token")
    }
}

module.exports = authenticate