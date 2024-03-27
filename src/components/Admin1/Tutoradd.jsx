// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './tutoradd.css';

// const ImageAdd = () => {
//   const [images, setImages] = useState([]);
//   const [file, setFile] = useState(null);
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');

//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const response = await axios.get('http://localhost:3002/api/addtutor/getimages');
//         setImages(response.data.images);
//       } catch (error) {
//         console.error('Failed to fetch images:', error);
//       }
//     };
//     fetchImages();
//   }, []);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('name', name);
//     formData.append('description', description);

//     try {
//       const response = await axios.post('http://localhost:3002/api/addtutor/uploadtutor', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       setImages([...images, response.data.image]);
//       setFile(null);
//       setName('');
//       setDescription('');

//       toast.success('Tutor added successfully');
//     } catch (error) {
//       console.error('Failed to upload image:', error);
//       toast.error('Failed to upload image. Please try again.');
//     }
//   };

//   const handleDelete = async (image) => {
//     try {
//       await axios.delete(`http://localhost:3002/api/admin/deleteimage/${image.public_id}`);
//       setImages(images.filter(img => img.public_id !== image.public_id));
//       toast.success('Image deleted successfully');
//     } catch (error) {
//       console.error('Failed to delete image:', error);
//       toast.error('Failed to delete tutor. Please try again.');
//     }
//   };
  

//   return (
//     <div className="tutoraddcontainer">
//       <div className="tutoraddform">
//         <h2>Manage Tutors</h2>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="file">Choose Image:</label>
//             <input type="file" id="file" onChange={handleFileChange} />
//           </div>
//           <div>
//             <label htmlFor="name">Name:</label>
//             <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
//           </div>
//           <div>
//             <label htmlFor="description">Description:</label>
//             <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
//           </div>
//           <button type="submit">Upload</button>
//         </form>
//       </div>
//       <div className="tutoraddimages" style={{ overflow: "hidden" }}>
//         <h2>Images</h2>
//         {images.map(image => (
//           <div key={image.public_id} className="image-item">
//             <img src={image.url} alt={image.description} style={{ height: "100px", width: "100px" }} />
//             <p>{image.description}</p>
//             <button onClick={() => handleDelete(image)}>Disable</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageAdd;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './tutoradd.css';

// const ImageAdd = () => {
//   const [images, setImages] = useState([]);
//   const [file, setFile] = useState(null);
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');

//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const response = await axios.get('http://localhost:3002/api/addtutor/getimages');
//         setImages(response.data.images);
//       } catch (error) {
//         console.error('Failed to fetch images:', error);
//       }
//     };
//     fetchImages();
//   }, []);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('name', name);
//     formData.append('description', description);

//     try {
//       const response = await axios.post('http://localhost:3002/api/addtutor/uploadtutor', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       setImages([...images, response.data.image]);
//       setFile(null);
//       setName('');
//       setDescription('');

//       toast.success('Tutor added successfully');
//     } catch (error) {
//       console.error('Failed to upload image:', error);
//       toast.error('Failed to upload image. Please try again.');
//     }
//   };

//   const handleDelete = async (image) => {
//     try {
//       await axios.delete(`http://localhost:3002/api/admin/deleteimage/${image.public_id}`);
//       setImages(images.filter(img => img.public_id !== image.public_id));
//       toast.success('Image deleted successfully');
//     } catch (error) {
//       console.error('Failed to delete image:', error);
//       toast.error('Failed to delete image. Please try again.');
//     }
//   };

//   return (
//     <div className="tutoraddcontainer">
//       <div className="tutoraddform">
//         <h2>Manage Tutors</h2>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="file">Choose Image:</label>
//             <input type="file" id="file" onChange={handleFileChange} />
//           </div>
//           <div>
//             <label htmlFor="name">Name:</label>
//             <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
//           </div>
//           <div>
//             <label htmlFor="description">Description:</label>
//             <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
//           </div>
//           <button type="submit">Upload</button>
//         </form>
//       </div>
//       <div className="tutoraddimages" style={{ overflow: "hidden" }}>
//         <h2>Images</h2>
//         {images.map(image => (
//           <div key={image.public_id} className="image-item">
//             <img src={image.url} alt={image.description} style={{ height: "100px", width: "100px" }} />
//             <p>{image.description}</p>
//             <button onClick={() => handleDelete(image)}>Delete</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageAdd;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './tutoradd.css';

// const ImageAdd = () => {
//   const [images, setImages] = useState([]);
//   const [file, setFile] = useState(null);
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');

//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const response = await axios.get('http://localhost:3002/api/addtutor/getimages');
//         setImages(response.data.images);
//       } catch (error) {
//         console.error('Failed to fetch images:', error);
//       }
//     };
//     fetchImages();
//   }, []);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('name', name);
//     formData.append('description', description);

//     try {
//       const response = await axios.post('http://localhost:3002/api/addtutor/uploadtutor', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       setImages([...images, response.data.image]);
//       setFile(null);
//       setName('');
//       setDescription('');

//       toast.success('Tutor added successfully');
//     } catch (error) {
//       console.error('Failed to upload image:', error);
//       toast.error('Failed to upload image. Please try again.');
//     }
//   };

//   const handleDelete = async (image) => {
//     try {
//       await axios.delete('http://localhost:3002/api/addtutor/delete', { data: { image } });
//       setImages(images.filter(img => img.public_id !== image.public_id));
//       toast.success('Image deleted successfully');
//     } catch (error) {
//       console.error('Failed to delete image:', error);
//       toast.error('Failed to delete image. Please try again.');
//     }
//   };
  

//   return (
//     <div className="tutoraddcontainer">
//       <div className="tutoraddform">
//         <h2>Manage Tutors</h2>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="file">Choose Image:</label>
//             <input type="file" id="file" onChange={handleFileChange} />
//           </div>
//           <div>
//             <label htmlFor="name">Name:</label>
//             <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
//           </div>
//           <div>
//             <label htmlFor="description">Description:</label>
//             <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
//           </div>
//           <button type="submit">Upload</button>
//         </form>
//       </div>
//       <div className="tutoraddimages" style={{ overflow: "hidden" }}>
//         <h2>Images</h2>
//         {images.map(image => (
//           <div key={image.public_id} className="image-item">
//             <img src={image.url} alt={image.description} style={{ height: "100px", width: "100px" }} />
//             <p>{image.description}</p>
//             <button onClick={() => handleDelete(image.public_id)}>Delete</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageAdd;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './tutoradd.css';

const ImageAdd = () => {
  const [images, setImages] = useState([]);
  const [file, setFile] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:3002/api/addtutor/getimages');
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
      const response = await axios.post('http://localhost:3002/api/addtutor/uploadtutor', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setImages([...images, response.data.image]);
      setFile(null);
      setName('');
      setDescription('');

      toast.success('Tutor added successfully');
    } catch (error) {
      console.error('Failed to upload image:', error);
      toast.error('Failed to upload image. Please try again.');
    }
  };

  const handleDelete = async (email) => {
    try {
      await axios.delete('http://localhost:3002/api/addtutor/delete', { data: { email } });
      setImages(images.filter(img => img.email !== email));
      toast.success('Image deleted successfully');
    } catch (error) {
      console.error('Failed to delete image:', error);
      toast.error('Failed to delete image. Please try again.');
    }
  };

  return (
    <div className="tutoraddcontainer">
      <div className="tutoraddform">
        <h2>Manage Tutors</h2>
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
      <div className="tutoraddimages" style={{ overflow: "hidden" }}>
        <h2>Images</h2>
        {images.map(image => (
          <div key={image.public_id} className="image-item">
            <img src={image.url} alt={image.description} style={{ height: "100px", width: "100px" }} />
            <p>{image.description}</p>
            <button onClick={() => handleDelete(image.email)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageAdd;
