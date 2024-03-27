import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Tutor = () => {
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    const fetchTutors = async () => {
      try {
        const response = await axios.get('http://localhost:3002/api/addtutor/getimages');
        setTutors(response.data.images);
      } catch (error) {
        console.error('Failed to fetch tutors:', error);
      }
    };
    fetchTutors();
  }, []);

  return (
    <div>
      <section className='tutor-section'>
        <h1 className="text-center">HIRE TUTOR WITH YOUR PREFERENCES</h1>

        <div className="home-container">
          {tutors.map((tutor) => (
            <div key={tutor._id} className="profile-card">
              <div className="img">
                <img src={tutor.url} alt={tutor.description} />
              </div>
              <div className="caption">
                <h3>{tutor.name}</h3>
                <p>{tutor.description}</p>
                <NavLink to="/tutordetails"><button>Hire</button></NavLink>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Tutor;





