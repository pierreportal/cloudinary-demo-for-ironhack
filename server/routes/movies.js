const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie');

const fileUploader = require('../configs/cloudinary');

router.post('/upload', fileUploader.single('imageUrl'), (req, res, next) => {
    if (!req.file) {
        next(new Error('No file uploaded!'));
        return;
    }
    res.json({ secure_url: req.file.path });
});

router.post('/create', (req, res, next) => {
    Movie.create(req.body)
        .then(newlyCreatedMovieFromDB => {
            // console.log('Created new movie: ', newlyCreatedMovieFromDB);
            res.status(200).json(newlyCreatedMovieFromDB);
        })
        .catch(err => next(err));
});

module.exports = router;