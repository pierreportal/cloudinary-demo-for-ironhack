import React from 'react';
import service from '../api/service';

const Home = () => {

    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [imageUrl, setImageUrl] = React.useState('');

    const handleTitle = (event) => setTitle(event.target.value);
    const handleDescription = (event) => setDescription(event.target.value);

    const handleFileUpload = e => {
        const uploadData = new FormData();

        uploadData.append('imageUrl', e.target.files[0]);

        service.handleUpload(uploadData)
            .then(response => {
                setImageUrl(response.secure_url);
            })
            .catch(err => console.log('Error while uploading the file: ', err));
    };

    const handleSubmit = e => {
        e.preventDefault();
        service.saveNewMovie({ title, description, imageUrl })
            .then(res => {
                console.log('added new movie: ', res);
            })
            .catch(err => console.log('Error while adding the new movie: ', err));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder="Title" value={title} onChange={handleTitle} />
            <textarea type="text" name="description" placeholder="Description" value={description} onChange={handleDescription} />
            <input type="file" onChange={handleFileUpload} />
            <button type="submit">Go</button>
        </form>
    )
}

export default Home
