const express = require("express");
const { getAllCaseStudy, getCaseStudy } = require("../controllers/admin");
const router = express.Router()

router.route("/casestudy").get(getAllCaseStudy);
router.route("/casestudy/:id").get(getCaseStudy);

module.exports = router