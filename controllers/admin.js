const { CaseStudy } = require("../models/admin")
const getAllCaseStudy = async (req, res) => {
    try {
        const cases = await CaseStudy.find();
        if (cases.length == 0) return res.json([])
        return res.json(cases)
    } catch (err) {
        return res.status(400).json(err.message)
    }
}

const getCaseStudy = async (req, res) => {
    const id = req.params.id;
    if (!id) return res.status(400).json("Case Id is required");
    try {
        const selectedCase = await CaseStudy.findOne({ _id: id });
        return res.json(selectedCase);
    } catch (err) {
        return res.status(400).json(err.message)
    }
}

const addCaseStudy = async (req, res) => {
    let err = false;
    Object.entries(req.body).forEach(item => {
        if (!item) {
            err = true
        }
    })


    if (err || !req.body.name) return res.status(400).json("All inputs are required");
    try {
        const alreadyExists = await CaseStudy.findOne({ name: req.body.name })
        if (alreadyExists) return res.status(400).json("Already Exists");
        // creating case study
        const case_study = await CaseStudy.create(req.body);
        res.status(201).json(case_study);
    } catch (err) {
        return res.status(400).json(err.message)
    }

}

const updateCaseStudy = async (req, res) => {
    let id = req.params.id;
    if (!id) return res.status(400).json("Case Id is required");
    try {
        const updatedCase = await CaseStudy.findByIdAndUpdate(id, { ...req.body }, { new: true });
        res.json(updatedCase)
    } catch (err) {
        return res.status(400).json(err.message)
    }
}

const deleteCaseStudy = async (req, res) => {
    let id = req.params.id;
    if (!id) return res.status(400).json("Case Id is required");
    try {
        await CaseStudy.findByIdAndDelete(id);
        return res.json("Case Deleted Successfully");
    } catch (err) {
        return res.status(400).json(err.message)
    }
}

const deleteAllCaseStudy = async (req, res) => {
    try {
        await CaseStudy.deleteMany({})
        return res.json("Cases Deleted Succesfully")
    } catch (err) {
        return res.status(400).json(err.message)

    }
}

module.exports = {
    getAllCaseStudy,
    getCaseStudy,
    addCaseStudy,
    updateCaseStudy,
    deleteCaseStudy,
    deleteAllCaseStudy
}