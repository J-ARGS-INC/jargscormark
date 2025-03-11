const { CaseStudy } = require("../models/admin");
const multer = require("multer");
const fs = require('fs');
const path = require('path');
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
    const { name, description, services, results, links, details } = req.body
    if (!name || !description || !services || !results || !links || !details) return res.status(400).json("All inputs are required");

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
        // deleteing files 
        const selectedCase = await CaseStudy.findById(id);
        if (!selectedCase) return res.status(404).json("Invalid Case Id");
        const images = [selectedCase.image, ...selectedCase.details.map(item => item.images).flat(2)];
        images.forEach(image => {
            let fileName = image.split("/")[2]; // /uploads/filename => filename
            let filePath = path.join(__dirname, '..', "uploads", fileName);
            fs.unlink(filePath, (err) => {
                if (err) return res.status(400).json(err);
            });
        })
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
const folderPath = path.join(__dirname, '..', 'uploads');
const storage = multer.diskStorage({
    destination: folderPath,
    filename: (req, file, cb) => {
        cb(null, `${generateRandom(10)}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/;
        const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = fileTypes.test(file.mimetype);

        if (mimetype && extname) {
            return cb(null, true);
        } else {
            cb('Error: Images Only');
        }
    }
})

const uploadFile = async (req, res) => {
    try {

        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath)
        }
        upload.array('files')(req, res, (err) => {
            if (err) {
                return res.status(400).json(err.message || 'File upload failed');
            }

            if (!req.files || req.files.length == 0) {
                return res.status(400).json('No file uploaded');
            }
            let files = req.files.map(file => `/uploads/${file.filename}`)
            res.json(files);
        });
    } catch (err) {
        res.status(400).json(err.message)
    }
}



const generateRandom = (length) => {
    const characters = "abcdefghijklmnopqrstuvwzyz0123456789";
    let random = ""
    for (let i = 1; i <= length; i++) {
        random += characters[Math.floor(Math.random() * characters.length)]
    }

    return random;
}

module.exports = {
    getAllCaseStudy,
    getCaseStudy,
    addCaseStudy,
    updateCaseStudy,
    deleteCaseStudy,
    deleteAllCaseStudy,
    uploadFile
}