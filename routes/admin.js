const express = require("express");
const router = express.Router();
const { getAllCaseStudy, addCaseStudy, getCaseStudy, updateCaseStudy, deleteCaseStudy, deleteAllCaseStudy, uploadFile } = require("../controllers/admin");
router.route("/casestudy").get(getAllCaseStudy).post(addCaseStudy).delete(deleteAllCaseStudy);
router.route("/casestudy/:id").get(getCaseStudy).patch(updateCaseStudy).delete(deleteCaseStudy)
router.route("/upload").post(uploadFile)

module.exports = router