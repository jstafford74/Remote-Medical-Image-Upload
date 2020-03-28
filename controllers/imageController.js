require("dotenv").config();
const multer = require('multer');
const crypto = require('crypto');
const path = require('path');
const GridFsStorage = require('multer-gridfs-storage');


var storage = new GridFsStorage({
    url: process.env.MONGO_URI,
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if (err) {
                    return reject(err);
                }
                const filename = buf.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: 'uploads'
                };
                resolve(fileInfo);
            });
        });
    }
});

const upload = multer({ storage });


// Defining methods for the authController
module.exports = {
    submitImage: (req, res) => {
        res.json({ file: req.file })
        // res.redirect('/');
    },
    getImages: (req, res) => {
        gfs.files.find().toArray((err, files) => {
            // Files exist?
            if (!files || files.length === 0) {
                return res.status(404).json({
                    err: 'No Files exist'
                })
            }
            return res.json(files);
        })
    },
    getImage: (req, res) => {
        gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
            if (!file || file.length === 0) {
                return res.status(404).json({
                    err: 'No File exists'
                })
            }
            return res.json(file);
        })
    }
}