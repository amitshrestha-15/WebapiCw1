const multer = require('multer')
const uuid = require('uuid').v4
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads')

    },
    filename: (req, file, cb) => {
        cb(null, `${file.originalname}`)
    }
})

const fileFilter = (req, file, cb) => {
    const ext = path.extname(file.originalname.toLowerCase())

    if (!ext.match(/(png|jpg|jpeg|mp4|avi|mov)/)) {
        return cb(new Error('Only png, jpg and jpeg, mp4, avi and mov are allowed'))
    }
    cb(null, true)
}

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    
})

module.exports = upload