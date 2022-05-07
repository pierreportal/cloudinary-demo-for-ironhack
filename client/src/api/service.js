import axios from 'axios';

const service = axios.create({
    // make sure you use PORT = 5005 (the port where our server is running)
    baseURL: 'http://localhost:3005/api',
    withCredentials: true // => you might need this when having the users in the app
});

const errorHandler = err => {
    throw err;
};

const handleUpload = file => {
    return service
        .post('/movies/upload', file)
        .then(res => res.data)
        .catch(errorHandler);
};

const saveNewMovie = newMovie => {
    return service
        .post('/movies/create', newMovie)
        .then(res => res.data)
        .catch(errorHandler);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    service,
    handleUpload,
    saveNewMovie
};
