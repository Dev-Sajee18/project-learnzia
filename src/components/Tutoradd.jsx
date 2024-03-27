
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Document, Page } from 'react-pdf';

const Tutoradd = () => {
  const [images, setImages] = useState([]);
  const [pdfUrl, setPdfUrl] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:3002/api/addtutor/getimages');
        setImages(response.data?.images || []);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
    fetchImages();
  }, []);

  const handlePdfClick = (url) => {
    setPdfUrl(url);
  };

  return (
    <div style={{ marginTop: "150px" }}>
      <h2>Image Gallery</h2>
      {images.map((image) => (
        <div key={image._id} className="image-item" style={{ marginRight: "1000px" }}>
          <div>
            <img src={image.url} alt={image} style={{ height: "300px", width: "300px" }} /> <br />
          </div>
          <div>
            <p>{image.name}</p>
            <p>{image.description}</p>
            <button onClick={() => handlePdfClick(image.Url)}>View PDF</button>
          </div>
        </div>
      ))}
      {pdfUrl && (
        <div>
          <h2>PDF Viewer</h2>
          <Document file={pdfUrl}>
            <Page pageNumber={1} />
          </Document>
        </div>
      )}
    </div>
  );
};

export default Tutoradd;






