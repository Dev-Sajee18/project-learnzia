// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const CandidateList = () => {
//     const [candidates, setCandidates] = useState([]);

//     useEffect(() => {
//         const fetchCandidates = async () => {
//             try {
//                 const response = await axios.get('http://localhost:3002/api/candidate/getallcandidates');
//                 setCandidates(response.data);
//             } catch (error) {
//                 console.error(error);
//             }
//         };
//         fetchCandidates();
//     }, []);

//     const handleDelete = async (id) => {
//         try {
//             await axios.delete(`http://localhost:3002/api/candidate/${id}`);
//             setCandidates(candidates.filter(candidate => candidate._id !== id));
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     return (
//         <div className="container mt-5">
//             {/* <h2 className="mb-4">Candidates List</h2> */}
//             <table className="table table-striped">
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Address</th>
//                         <th>Phone Number</th>
//                         <th>Email</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {candidates.map(candidate => (
//                         <tr key={candidate._id}>
//                             <td>{candidate.name}</td>
//                             <td>{candidate.address}</td>
//                             <td>{candidate.phoneNumber}</td>
//                             <td>{candidate.email}</td>
//                             <td>
//                                 <button className="btn btn-danger" onClick={() => handleDelete(candidate._id)}>Disable</button>
//                                 {/* Add update functionality here */}
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default CandidateList;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const CandidateList = () => {
//     const [candidates, setCandidates] = useState([]);

//     useEffect(() => {
//         const fetchCandidates = async () => {
//             try {
//                 const response = await axios.get('http://localhost:3002/api/candidate/getallcandidates');
//                 setCandidates(response.data);
//             } catch (error) {
//                 console.error(error);
//             }
//         };
//         fetchCandidates();
//     }, []);

//     const handleDelete = async (id) => {
//         try {
//             await axios.delete(`http://localhost:3002/api/admin/deletetutor/${id}`);
//             setCandidates(candidates.filter(candidate => candidate._id !== id));
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     return (
//         <div className="container mt-5">
//             {/* <h2 className="mb-4">Candidates List</h2> */}
//             <table className="table table-striped">
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Address</th>
//                         <th>Phone Number</th>
//                         <th>Email</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {candidates.map(candidate => (
//                         <tr key={candidate._id}>
//                             <td>{candidate.name}</td>
//                             <td>{candidate.address}</td>
//                             <td>{candidate.phoneNumber}</td>
//                             <td>{candidate.email}</td>
//                             <td>
//                                 <button className="btn btn-danger" onClick={() => handleDelete(candidate._id)}>Disable</button>
//                                 {/* Add update functionality here */}
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default CandidateList;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CandidateList = () => {
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        const fetchCandidates = async () => {
            try {
                const response = await axios.get('http://localhost:3002/api/candidate/getallcandidates');
                setCandidates(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchCandidates();
    }, []);

    const handleDelete = async (email) => {
        try {
            await axios.delete(`http://localhost:3002/api/candidate/${email}`);
            setCandidates(candidates.filter(candidate => candidate.email !== email));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container mt-5">
            {/* <h2 className="mb-4">Candidates List</h2> */}
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {candidates.map(candidate => (
                        <tr key={candidate._id}>
                            <td>{candidate.name}</td>
                            <td>{candidate.address}</td>
                            <td>{candidate.phoneNumber}</td>
                            <td>{candidate.email}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => handleDelete(candidate.email)}>Disable</button>
                                {/* Add update functionality here */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CandidateList;
