import React, { useEffect, useState } from "react";
import axios from "axios";

function Zipdownload() {
  const [allFiles, setAllFiles] = useState(null);

  useEffect(() => {
    getPdf();
  }, []);


  const getPdf = async () => {
    const result = await axios.get("http://localhost:3002/get-zipfiles");
    setAllFiles(result.data.data);
  };

  const downloadFile = async (filename) => {
    const result = await axios.get(`http://localhost:3002/download-zipfile/${filename}`, {
      responseType: 'blob',
    });
    const url = window.URL.createObjectURL(new Blob([result.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className="container mt-5" >
      <h2 className="text-center mb-4">Available Zip Files</h2>
      <div className="list-group">
        {allFiles &&
          allFiles.map((data, index) => (
            <div key={index} className="list-group-item d-flex justify-content-between align-items-center">
              <div className="ms-2 me-auto">{data.title}</div>
              {/* <button
                className="btn btn-primary"
                onClick={() => downloadFile(data.zip)}
              >
                Download
              </button> */}
                                <a href={`http://localhost:3002/${data?.zip}`} className="btn saj rounded-pill" target="_blank">Download</a>

            </div>
          ))}
      </div>
    </div>
  );
  
}

export default Zipdownload;


// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function Zipdownload({ cartItems = [] }) {
//   const [downloadableFiles, setDownloadableFiles] = useState([]);

//   useEffect(() => {
//     getDownloadableFiles();
//   }, []);

//   const getDownloadableFiles = async () => {
//     const result = await axios.get("http://localhost:3002/get-zipfiles");
//     const allFiles = result.data.data;
//     console.log("All Files:", allFiles);
  
//     const downloadableFiles = allFiles.filter((file) =>
//       cartItems.some((item) => item.title === file.title)
//     );
//     console.log("Downloadable Files:", downloadableFiles);
  
//     setDownloadableFiles(downloadableFiles);
//   };
  

//   const downloadFile = async (filename) => {
//     const result = await axios.get(`http://localhost:3002/download-zipfile/${filename}`, {
//       responseType: 'blob',
//     });
//     const url = window.URL.createObjectURL(new Blob([result.data]));
//     const link = document.createElement('a');
//     link.href = url;
//     link.setAttribute('download', filename);
//     document.body.appendChild(link);
//     link.click();
//   };

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center mb-4">Available Zip Files</h2>
//       <div className="list-group">
//         {downloadableFiles.map((data, index) => (
//           <div key={index} className="list-group-item d-flex justify-content-between align-items-center">
//             <div className="ms-2 me-auto">{data.title}</div>
//             <a href={`http://localhost:3002/${data.zip}`} className="btn saj rounded-pill" target="_blank" rel="noreferrer">
//               Download
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Zipdownload;
