const express = require("express");
const router = express.Router();
const { authAdmin } = require("../controllers/auth");
router.route("/admin").post(authAdmin)

module.exports = router