// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Document, Page } from 'react-pdf';
// const Pdf = () => {
//   const [images, setImages] = useState([]);
//   // const [pdfUrl, setPdfUrl] = useState('');
//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const response = await axios.get('http://localhost:3001/api/pdf/getimages');
//         setImages(response.data?.images || []);
//       } catch (error) {
//         console.error('Error fetching images:', error);
//       }
//     };
//     fetchImages();
//   }, []);
//   const handlePdfClick = async (url) => {
//     setImages(url);
//   };
//   return (
//     <div style={{ marginTop: "150px" }}>
//       <h2>Image Gallery</h2>
//       {images.map((image) => (
//         <div key={image._id} className="image-item" style={{ marginRight: "1000px" }}>
//           <div>
//             <img src={image.url} alt={image} style={{ height: "300px", width: "300px" }} /> <br />
//           </div>
//           <div>
//             <p>{image.version}</p>
//             <p>{image.description}</p>
//             <button onClick={() => handlePdfClick(image.Url)}>View PDF</button>
//           </div>
//         </div>
//       ))}
//       {images && (
//         <div>
//           <h2>PDF Viewer</h2>
//           <Document file={images}>
//             <Page pageNumber={1} />
//           </Document>
//         </div>
//       )}
//     </div>
//   );
// };
// export default Pdf;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Document, Page } from 'react-pdf';

const Pdf = () => {
  const [images, setImages] = useState([]);
  const [pdfUrl, setPdfUrl] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/pdf/getimages');
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
            <p>{image.version}</p>
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

export default Pdf;




