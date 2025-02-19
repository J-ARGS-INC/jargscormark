const express = require("express");
const router = express.Router();
const { getAllCaseStudy, addCaseStudy, getCaseStudy, updateCaseStudy, deleteCaseStudy, deleteAllCaseStudy } = require("../controllers/admin");
router.route("/casestudy").get(getAllCaseStudy).post(addCaseStudy).delete(deleteAllCaseStudy);
router.route("/casestudy/:id").get(getCaseStudy).patch(updateCaseStudy).delete(deleteCaseStudy)
module.exports = router