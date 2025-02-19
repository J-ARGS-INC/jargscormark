const mongoose = require("mongoose");

const caseStudySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    services: {
        type: [String],
        required: true
    },
    results: {
        type: [String],
        required: true
    },
    link: {
        linkType: String,
        address: String
    },

    image: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    }
})

module.exports = {
    CaseStudy: mongoose.model("CaseStudy", caseStudySchema)
}