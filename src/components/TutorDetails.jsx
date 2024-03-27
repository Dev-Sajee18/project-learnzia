import React from 'react';
import { NavLink } from 'react-router-dom';
const Tutordetails = () => {
    return (
        <div style={{marginTop:"200px",marginLeft:"100px "}}>
            <div class="container my-5" >
                <div class="row">
                    <div class="col-lg-6">
                        <img class="w-100 shadow my-5" src="../assets/man1.jpg" alt="..." />
                    </div>
                    <div class="col-lg-6">
                        <div class="p-5 mt-4">
                            <h1 class="display-4">HIRE AND LEARN </h1>
                            <p class="lead">Name : Tom Cruise</p>
                            <p class="lead">Type : full-time</p>
                            <p class="lead">Experience : 05 years</p>
                            <p class="lead">Gender : Male</p>
                            <p class="lead">Address : kodikaamam</p>
                            <p class="lead">Fees : 22k(monthly)</p>

                            <NavLink to="/CandidateForm"><a href="/service/basketball/bookingcoach" class="btn btn-outline-danger">Book Now</a></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Tutordetails;