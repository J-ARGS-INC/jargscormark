const jsonwebtoken = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { admin } = require("../models/auth");
const authAdmin = async (req, res) => {
    try {

        const { username, password } = req.body
        if (!username || !password) return res.status(400).json("All Inputs are required");

        // inserting admin if it doesn't exist
        const isExisting = await admin.countDocuments();
        if (!(!!isExisting)) {
            const hashPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10)
            await admin.create({ username: process.env.ADMIN_USERNAME, password: hashPassword })
        }

        // checking if user exists
        const user = await admin.findOne({ username })
        if (!user) {
            return res.status(404).json("Incorrect username or password");
        }

        // comparing input password with stored password
        if (!await bcrypt.compare(password, user.password)) {
            return res.status(400).json("Incorrect username or password");
        }
        const token = jsonwebtoken.sign({ id: user._id }, process.env.JWT_SECRET);
        return res.status(200).json(token);
    } catch (err) {
        return res.status(400).json(err.message)
    }
}


module.exports = { authAdmin }