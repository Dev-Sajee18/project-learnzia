// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import './zipadd.css'



// function Zipadd() {
//   const [title, setTitle] = useState("");
//   const [file, setFile] = useState("");
//   const [image, setImage] = useState("");
//   const [price, setPrice] = useState("");
//   const [description, setDescription] = useState("");
//   const [allFiles, setAllFiles] = useState(null);

//   useEffect(() => {
//     getPdf();
//   }, []);

//   const getPdf = async () => {
//     const result = await axios.get("http://localhost:3002/get-zipfiles");
//     setAllFiles(result.data.data);
//   };

//   const submitImage = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("zip", file);
//     formData.append("image", image);
//     formData.append("price", price);
//     formData.append("description", description);

//     const result = await axios.post(
//       "http://localhost:3002/upload-zipfiles",
//       formData,
//       {
//         headers: { "Content-Type": "multipart/form-data" },
//       }
//     );

//     if (result.data.status === "ok") {
//       alert("Uploaded Successfully!!!");
//       getPdf();
//     }
//   };

//   const deleteFile = async (id) => {
//     try {
//       const result = await axios.delete(`http://localhost:3002/delete-zipfile/${id}`);
//       if (result.data.status === "ok") {
//         alert("File deleted successfully!");
//         getPdf();
//       }
//     } catch (error) {
//       console.error(error);
//       alert("Failed to delete file.");
//     }
//   };

//   return (
//     <div className="Zip">
//       <form className="formStyle" onSubmit={submitImage}>
//         <h4>Upload Zip</h4>
//         <br />
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Title"
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <br />
//         <input
//           type="file"
//           className="form-control"
//           accept=".zip"
//           onChange={(e) => setFile(e.target.files[0])}
//         />
//         <br />
//         <input
//           type="file"
//           className="form-control"
//           accept="image/*"
//           onChange={(e) => setImage(e.target.files[0])}
//         />
//         <br />
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Price"
//           onChange={(e) => setPrice(e.target.value)}
//         />
//         <br />
//         <textarea
//           className="form-control"
//           placeholder="Description"
//           onChange={(e) => setDescription(e.target.value)}
//         />
//         <br />
//         <button className="btn btn-primary" type="submit">
//           Submit
//         </button>
//       </form>
//       <div className="uploaded">
//         <h4>Uploaded Files:</h4>
//         <div className="output-div">
//           {allFiles &&
//             allFiles.map((data, index) => (
//               <div className="inner-div" key={index}>
//                 <h6>Title: {data.title}</h6>
//                 <h6>Image: {data.image}</h6>
//                 <h6>Price: {data.price}</h6>
//                 <h6>Description: {data.description}</h6>
//                 {/* <button
//                   className="btn btn-primary"
//                   onClick={() => deleteFile(data._id)}
//                 >
//                   Delete
//                 </button> */}
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Zipadd;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './zipadd.css'

function Zipadd() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [allFiles, setAllFiles] = useState(null);

  useEffect(() => {
    getPdf();
  }, []);

  const getPdf = async () => {
    const result = await axios.get("http://localhost:3002/get-zipfiles");
    setAllFiles(result.data.data);
  };

  const submitImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("zip", file);
    formData.append("image", image);
    formData.append("price", price);
    formData.append("description", description);

    const result = await axios.post(
      "http://localhost:3002/upload-zipfiles",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    if (result.data.status === "ok") {
      toast.success("Uploaded Successfully!!!");
      getPdf();
    }
  };

  const deleteFile = async (id) => {
    try {
      const result = await axios.delete(`http://localhost:3002/delete-zipfile/${id}`);
      if (result.data.status === "ok") {
        toast.success("File deleted successfully!");
        getPdf();
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete file.");
    }
  };

  return (
    <div className="Zip">
      <ToastContainer />
      <form className="formStyle" onSubmit={submitImage}>
        <h4>Upload Zip</h4>
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <input
          type="file"
          className="form-control"
          accept=".zip"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <br />
        <input
          type="file"
          className="form-control"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <textarea
          className="form-control"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
      <div className="uploaded">
        <h4>Uploaded Files:</h4>
        <div className="output-div">
          {allFiles &&
            allFiles.map((data, index) => (
              <div className="inner-div" key={index}>
                <h6>Title: {data.title}</h6>
                <h6>Image: {data.image}</h6>
                <h6>Price: {data.price}</h6>
                <h6>Description: {data.description}</h6>
                <button
                  className="btn btn-primary"
                  onClick={() => deleteFile(data._id)}
                >
                  Delete
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Zipadd;
