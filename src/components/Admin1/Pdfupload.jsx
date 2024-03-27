import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './pdfupload.css'
const ImageUpload = () => {
  const [images, setImages] = useState([]);
  const [file, setFile] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/pdf/getimages');
        setImages(response.data.images);
      } catch (error) {
        console.error('Failed to fetch images:', error);
      }
    };
    fetchImages();
  }, []);
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', name);
    formData.append('description', description);
    try {
      const response = await axios.post('http://localhost:3001/api/pdf/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setImages([...images, response.data.image]);
      setFile(null);
      setName('');
      setDescription('');
    } catch (error) {
      console.error('Failed to upload image:', error);
    }
  };
  const handleDelete = async (image) => {
    try {
      await axios.delete(`http://localhost:3001/api/admin/deleteimage/${image.public_id}`);
      setImages(images.filter(img => img.public_id !== image.public_id));
    } catch (error) {
      console.error('Failed to delete image:', error);
    }
  };
  return (

    <div className="pdfcontainer">
  <div className="pdfform">
    <h2>Upload Image</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="file">Choose Image:</label>
        <input type="file" id="file" onChange={handleFileChange} />
      </div>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <button type="submit">Upload</button>
    </form>
  </div>
  <div className="pdfimages">
    <h2>Images</h2>
    {images.map(image => (
      <div key={image.public_id} className="image-item">
        <img src={image.url} alt={image.description} />
        <p>{image.description}</p>
        <button onClick={() => handleDelete(image)}>Delete</button>
      </div>
    ))}
  </div>
</div>

  );
};
export default ImageUpload;