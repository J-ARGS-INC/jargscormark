const mongoose = require("mongoose");
const adminschema = mongoose.Schema({
    username: String,
    password: String
})


module.exports = {
    admin: mongoose.model("admin", adminschema)
}