// import React, { useRef } from 'react'

// export const App1 = () => {

// const fileInputRef = useRef(null)

// const handleFileUpload = async () => {
//     const files = fileInputRef.current.files

//     if(files.length > 0){
//         const formData = new FormData()

//         for(let i=0;i<files.length;i++){
//             formData.append("files",files[i])
//         }
// try{

// const response = await fetch("http://localhost:5000/upload",{
//     method:'POST',
//     body: formData
// })



// const data = await response.json()
// console.log('uploaded files:',data.files)



// }catch(error){
//     console.log("error")
// }

//     }
// }

//   return (
//     <div className='App1'>
// <h1>upload multiple IELTS files</h1>
// <input type='file' multiple ref={fileInputRef}/>
// <button onClick={handleFileUpload}>Upload files</button>
//     </div>
//   )
// }
