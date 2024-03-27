// import React from 'react';

// const About = () => {
//     return (
//         <>
//             <section id="about">
//                 <div className="container  py-5">
//                     <div className="row">
//                         <div className="col-md-6 imageee">
//                             <img src="/assets/abouttt1.png" alt="About" 
//                             className="w-75 mt-5 img-fluid" />
//                         </div>
//                         <div className="col-md-6 abouttt">
//                             <h3 className="fs-3 mb-0 abouttt1" >ABOUT US</h3>
//                             {/* <h1 className="display-6 mb-2">Who <b>We</b> Are</h1> */}
//                             <hr className="w-100"/>
//                             <p className="lead mb-4" style={{fontSize:"25px"}}  >Welcome to our IELTS e-learning platform, where expertise meets innovation. We prioritize personalized learning experiences, offering comprehensive test preparation. Our seasoned instructors are committed to guiding you through each module, ensuring success in your IELTS journey. </p>
//                             <div className="btn btnn btn-primary rounded-pill px-4 py-2">Get Started</div>
//                             {/* <div className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">Contact Us</div> */}
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }

// export default About;

// import React from 'react';
// import { Link } from 'react-router-dom';

// const About = () => {
//     return (
//         <>
//             <section id="about" className="bg-light">
//                 <div className="container py-5">
//                     <div className="row">
//                         <div className="col-md-6">
//                             <img src="/assets/abouttt1.png" alt="About" className="w-75 mt-5 img-fluid" />
//                         </div>
//                         <div className="col-md-6 d-flex flex-column justify-content-center">
//                             <h3 className="fs-3 mb-0">ABOUT US</h3>
//                             <hr className="w-25 my-4" />
//                             <p className="lead mb-4" style={{fontSize: "1.25rem"}}>Welcome to our IELTS e-learning platform, where expertise meets innovation. We prioritize personalized learning experiences, offering comprehensive test preparation. Our seasoned instructors are committed to guiding you through each module, ensuring success in your IELTS journey.</p>
//                             <Link to="/login" className="btn btn-primary rounded-pill px-4 py-2 mb-3">Get Started</Link>
//                             <Link to="/contact" className="btn btn-outline-primary rounded-pill px-4 py-2">Contact Us</Link>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }

// export default About;




import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <>
            <section id="about" className="bg-light">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="/assets/abouttt1.png" alt="About" className="w-75 mt-5 img-fluid " style={{paddingLeft:"20px"}} />
                        </div>
                        <div className="col-md-6 d-flex flex-column justify-content-center">
                            <h3 className="fs-4 mb-0">ABOUT US</h3>
                            <hr className="w-25 my-4" />
                            <p className="lead mb-4" style={{fontSize: "1.35rem"}}>Welcome to our IELTS e-learning platform, where expertise meets innovation. We prioritize personalized learning experiences, offering comprehensive test preparation. Our seasoned instructors are committed to guiding you through each module, ensuring success in your IELTS journey.</p>
                            <Link to="/login" className="btn rounded-pill px-4 py-2 mb-3" style={{ backgroundColor: '#800080', borderColor: '#800080', color: '#fff', transition: 'background-color 0.3s, color 0.3s' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#6a006a'} onMouseLeave={(e) => e.target.style.backgroundColor = '#800080'}>Get Started</Link>
                            <Link to="/contact" className="btn btn-outline- rounded-pill px-4 py-2" style={{ borderColor: '#800080', color: '#800080', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#6a006a'} onMouseLeave={(e) => e.target.style.color = '#800080'}>Contact Us</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;
