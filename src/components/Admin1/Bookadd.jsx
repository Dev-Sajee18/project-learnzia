// import { useEffect, useState } from "react";
// import axios from "axios";
// import { pdfjs } from "react-pdf";
// import PdfComp from "./PdfComp";
// import "./bookadd.css"

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   "/node_modules/pdfjs-dist/build/pdf.worker.min.mjs",
//   import.meta.url
// ).toString();

// function Bookadd() {
//   const [title, setTitle] = useState("");
//   const [file, setFile] = useState("");
//   const [allImage, setAllImage] = useState(null);
//   const [pdfFile, setPdfFile] = useState(null);

//   useEffect(() => {
//     getPdf();
//   }, []);

//   const getPdf = async () => {
//     const result = await axios.get("http://localhost:3002/get-files");
//     setAllImage(result.data.data);
//   };

//   const submitImage = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("file", file);

//     const result = await axios.post(
//       "http://localhost:3002/upload-files",
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

//   const showPdf = (pdf) => {
//     console.log("hjhjhh")
//     setPdfFile(`http://localhost:3002/files/${pdf}`);
//   };

//   return (
//     <div className="Book">
//       <form className="formStyle" onSubmit={submitImage}>
//         <h4>Upload Pdf </h4>
//         <br />
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Title"
//           required
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <br />
//         <input
//           type="file"
//           className="form-control"
//           accept="application/pdf"
//           required
//           onChange={(e) => setFile(e.target.files[0])}
//         />
//         <br />
//         <button className="btn btn-primary" type="submit">
//           Submit
//         </button>
//       </form>
//       <div className="uploaded">
//         <h4>Uploaded PDF:</h4>
//         <div className="output-div">
//           {allImage == null
//             ? ""
//             : allImage.map((data) => {
//                 return (
//                   <div className="inner-div" key={data.pdf}>
//                     <h6>Title: {data.title}</h6>
//                     <button
//                       className="btn btn-primary"
//                       onClick={() => showPdf(data.pdf)}
//                     >
//                       Show Pdf
//                     </button>
//                     <a
//                       href={`http://localhost:3002/files/${data.pdf}`}
//                       download={data.pdf}
//                     >
//                       Download
//                     </a>
//                   </div>
//                 );
//               })}
//         </div>
//       </div>
//       <PdfComp pdfFile={pdfFile} />
//     </div>
//   );
// }

// export default Bookadd;


// // import { useEffect, useState } from "react";
// // import axios from "axios";
// // import { pdfjs } from "react-pdf";
// // import PdfComp from "./PdfComp";
// // import "./bookadd.css"

// // pdfjs.GlobalWorkerOptions.workerSrc = new URL(
// //   "/node_modules/pdfjs-dist/build/pdf.worker.min.mjs",
// //   import.meta.url
// // ).toString();


// // function Bookadd() {
// //   const [title, setTitle] = useState("");
// //   const [pdfFile, setPdfFile] = useState(null);
// //   const [imageFile, setImageFile] = useState(null);
// //   const [allFiles, setAllFiles] = useState([]);

// //   useEffect(() => {
// //     getPdf();
// //   }, []);

// //   const getPdf = async () => {
// //     const result = await axios.get("http://localhost:3002/get-files");
// //     setAllFiles(result.data.data);
// //   };

// //   const submitImage = async (e) => {
// //     e.preventDefault();
// //     const pdfFormData = new FormData();
// //     pdfFormData.append("title", title);
// //     pdfFormData.append("file", pdfFile);

// //     const imageFormData = new FormData();
// //     imageFormData.append("title", title);
// //     imageFormData.append("file", imageFile);

// //     const pdfResult = await axios.post(
// //       "http://localhost:3002/upload-files",
// //       pdfFormData,
// //       {
// //         headers: { "Content-Type": "multipart/form-data" },
// //       }
// //     );

// //     const imageResult = await axios.post(
// //       "http://localhost:3002/upload-image",
// //       imageFormData,
// //       {
// //         headers: { "Content-Type": "multipart/form-data" },
// //       }
// //     );

// //     if (pdfResult.data.status === "ok" && imageResult.data.status === "ok") {
// //       alert("Uploaded Successfully!!!");
// //       getPdf();
// //     }
// //   };

// //   const showPdf = (pdf) => {
// //     setPdfFile(`http://localhost:3002/files/${pdf}`);
// //   };

// //   return (
// //     <div className="Book">
// //       <form className="formStyle" onSubmit={submitImage}>
// //         <h4>Upload PDF and Image</h4>
// //         <br />
// //         <input
// //           type="text"
// //           className="form-control"
// //           placeholder="Title"
// //           required
// //           onChange={(e) => setTitle(e.target.value)}
// //         />
// //         <br />
// //         <input
// //           type="file"
// //           className="form-control"
// //           accept="application/pdf"
// //           required
// //           onChange={(e) => setPdfFile(e.target.files[0])}
// //         />
// //         <br />
// //         <input
// //           type="file"
// //           className="form-control"
// //           accept="image/*"
// //           required
// //           onChange={(e) => setImageFile(e.target.files[0])}
// //         />
// //         <br />
// //         <button className="btn btn-primary" type="submit">
// //           Submit
// //         </button>
// //       </form>
// //       <div className="uploaded">
// //         <h4>Uploaded Files:</h4>
// //         <div className="output-div">
// //           {allFiles.map((data) => (
// //             <div className="inner-div" key={data.pdf}>
// //               <h6>Title: {data.title}</h6>
// //               <button
// //                 className="btn btn-primary"
// //                 onClick={() => showPdf(data.pdf)}
// //               >
// //                 Show Pdf
// //               </button>
// //               <a
// //                 href={`http://localhost:3002/files/${data.pdf}`}
// //                 download={data.pdf}
// //               >
// //                 Download
// //               </a>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //       <PdfComp pdfFile={pdfFile} />
// //     </div>
// //   );
// // }

// // export default Bookadd;



import { useEffect, useState } from "react";
import axios from "axios";
import { pdfjs } from "react-pdf";
import PdfComp from "./PdfComp";
import "./bookadd.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "/node_modules/pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

function Bookadd() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [allImage, setAllImage] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);

  useEffect(() => {
    getPdf();
  }, []);

  const getPdf = async () => {
    const result = await axios.get("http://localhost:3002/get-files");
    setAllImage(result.data.data);
  };

  const submitImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);

    const result = await axios.post(
      "http://localhost:3002/upload-files",
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

  const showPdf = (pdf) => {
    console.log("hjhjhh");
    setPdfFile(`http://localhost:3002/files/${pdf}`);
  };

  return (
    <div className="Book">
      <ToastContainer />
      <form className="formStyle" onSubmit={submitImage}>
        <h4>Upload Pdf </h4>
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Title"
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <input
          type="file"
          className="form-control"
          accept="application/pdf"
          required
          onChange={(e) => setFile(e.target.files[0])}
        />
        <br />
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
      <div className="uploaded">
        <h4>Uploaded PDF:</h4>
        <div className="output-div">
          {allImage == null
            ? ""
            : allImage.map((data) => {
                return (
                  <div className="inner-div" key={data.pdf}>
                    <h6>Title: {data.title}</h6>
                    <button
                      className="btn btn-primary"
                      onClick={() => showPdf(data.pdf)}
                    >
                      Show Pdf
                    </button>
                    <a
                      href={`http://localhost:3002/files/${data.pdf}`}
                      download={data.pdf}
                    >
                      Download
                    </a>
                  </div>
                );
              })}
        </div>
      </div>
      <PdfComp pdfFile={pdfFile} />
    </div>
  );
}

export default Bookadd;
