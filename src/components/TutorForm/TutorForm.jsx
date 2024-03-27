

import React, { useState } from 'react';
import axios from 'axios';
import './TutorForm.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const TutorForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        phoneNumber: '',
        email: '',
        password: '',
        staff: '',
        workingTime: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3002/api/tutor/signup', formData);
            console.log(response.data);
            toast.success('Tutor registered successfully!');
            setFormData({
                name: '',
                address: '',
                phoneNumber: '',
                email: '',
                password: '',
                staff: '',
                workingTime: '',
            });
        } catch (error) {
            console.error(error);
            toast.error('Failed to register tutor. Please try again.');
        }
    };

    return (
        <section id='tf'>
            <div className='containertutorform'>
                <h1 style={{marginLeft:"270px"}}>Tutor Registration</h1>
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
                    <div className='input-field'>
                        <select
                            name='staff'
                            value={formData.staff}
                            onChange={handleChange}
                            required
                            style={{ margin: '10px 0px 10px 200px' }} // Apply inline CSS here
                        >
                            <option value=''>Select staff</option>
                            <option value='government'>Government</option>
                            <option value='private'>Private</option>
                        </select>
                    </div>
                    <div className='input-field'>
                        <select
                            name='workingTime'
                            value={formData.workingTime}
                            onChange={handleChange}
                            required
                            style={{ marginLeft: '200px' }} // Apply inline CSS here
                        >
                            <option value=''>Select working time</option>
                            <option value='fullTime'>Full Time</option>
                            <option value='partTime'>Part Time</option>
                        </select>
                    </div>
                    <button type='submit' className='submitBtn' style={{ marginLeft: ' 330px' }}>
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
};

export default TutorForm;
