
// import React, { useState } from 'react';
// import axios from 'axios';
// import './CandidateForm.css';

// export const CandidateForm = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         address: '',
//         phoneNumber: '',
//         email: '',
//         password: '',
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:3002/api/candidate/signup', formData);
//             console.log(response.data);
//             alert('Candidate registered successfully!');
//             setFormData({
//                 name: '',
//                 address: '',
//                 phoneNumber: '',
//                 email: '',
//                 password: '',
//             });
//         } catch (error) {
//             console.error(error);
//             alert('Failed to register candidate. Please try again.');
//         }
//     };

//     return (
//         <section id='cf'>
//             <div className='containertutorform'>
//                 <header>Candidate Registration form</header>
//                 <form onSubmit={handleSubmit}>
//                     <div className='input-field'>
//                         <input
//                             type='text'
//                             placeholder='Enter your name'
//                             name='name'
//                             value={formData.name}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div className='input-field'>
//                         <input
//                             type='text'
//                             placeholder='Enter your address'
//                             name='address'
//                             value={formData.address}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div className='input-field'>
//                         <input
//                             type='tel'
//                             placeholder='Enter your mobile number'
//                             name='phoneNumber'
//                             value={formData.phoneNumber}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div className='input-field'>
//                         <input
//                             type='email'
//                             placeholder='Enter your email'
//                             name='email'
//                             value={formData.email}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div className='input-field'>
//                         <input
//                             type='password'
//                             placeholder='Enter password'
//                             name='password'
//                             value={formData.password}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <button type='submit' className='submitBtn' style={{ marginLeft: ' 330px' }}>
//                         Submit
//                     </button>
//                 </form>
//             </div>
//         </section>
//     );
// };

// export default CandidateForm;




import React, { useState } from 'react';
import axios from 'axios';
import './CandidateForm.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CandidateForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        phoneNumber: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3002/api/candidate/signup', formData);
            console.log(response.data);
            toast.success('Candidate registered successfully!');
            setFormData({
                name: '',
                address: '',
                phoneNumber: '',
                email: '',
                password: '',
            });
        } catch (error) {
            console.error(error);
            toast.error('Failed to register candidate. Please try again.');
        }
    };

    return (
        <section id='cf'>
            <div className='containertutorform'>
                <h1 style={{marginLeft:"230px" , fontSize:"30px"}}>Candidate Registration form</h1>
                <form onSubmit={handleSubmit}>
                    <div className='input-field'>
                        <input
                            type='text'
                            placeholder='Enter your name'
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='input-field'>
                        <input
                            type='text'
                            placeholder='Enter your address'
                            name='address'
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='input-field'>
                        <input
                            type='tel'
                            placeholder='Enter your mobile number'
                            name='phoneNumber'
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='input-field'>
                        <input
                            type='email'
                            placeholder='Enter your email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='input-field'>
                        <input
                            type='password'
                            placeholder='Enter password'
                            name='password'
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type='submit' className='submitBtn' style={{ marginLeft: ' 330px' }}>
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
};

export default CandidateForm;
