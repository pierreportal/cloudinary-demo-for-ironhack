const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

// CLOUDINARY_NAME=dscqafalt
// CLOUDINARY_KEY = 183958194529427
// CLOUDINARY_SECRET = 4OLqqBFG4ZAdNU6QzHM6q5PBe70

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME, // 'dscqafalt',
    api_key: process.env.CLOUDINARY_KEY, //'183958194529427',
    api_secret: process.env.CLOUDINARY_SECRET //'4OLqqBFG4ZAdNU6QzHM6q5PBe70'
});

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        allowed_formats: ['jpg', 'png'],
        folder: 'movie-gallery' // The name of the folder in cloudinary
        // resource_type: 'raw', // => this is in case you want to upload other type of files, not just images
    }
});

module.exports = multer({ storage });