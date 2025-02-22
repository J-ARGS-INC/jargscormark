const mongoose = require("mongoose");

const caseStudySchema = mongoose.Schema({
    name: String,
    description: String,
    services: [String],
    results: [String],
    links: [String],
    image: String,
    details: [
        {
            title: String,
            subtitle: String,
            images: [String]
        }
    ]

})

module.exports = {
    CaseStudy: mongoose.model("CaseStudy", caseStudySchema)
}