import "../../../src/App.css"

import React from 'react'
import { NavLink } from 'react-router-dom';


 const Navbar = (props) => {
  return (
    <>
        <nav class="header" style={{zIndex:"999"}}>
      <div class="navbar">
        <h2 class="logo"><a href="/">Learnzia</a></h2>
        <input type="checkbox" id="menu-toggle" />
        <label for="menu-toggle" id="hamburger-btn">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </label>
        <ul class="links">
        <li><NavLink className="nav-link active" aria-current="page" to="/admin/userlist">User details</NavLink></li>
          <li><NavLink className="nav-link" to="/admin/tutorlist">Tutor details</NavLink></li>
          <li><NavLink className="nav-link" to="/admin/candidate">candidate details</NavLink></li>

         {/* <li><NavLink className="nav-link active" aria-current="page" to="/admin/upload">File uploads</NavLink></li> */}
          <li><NavLink className="nav-link active" aria-current="page" to="/admin/uploadtutor">Add tutor </NavLink></li>
          <li><NavLink className="nav-link active" aria-current="page" to="/admin/uploadbook">Materials</NavLink></li>
          <li><NavLink className="nav-link active" aria-current="page" to="/admin/uploadzip">Zip files</NavLink></li>
          {/* <li><NavLink className="nav-link active" aria-current="page" to="/admin/payments">payment</NavLink></li> */}


        </ul>

        {props.auth ?
        <div class="buttons">
        <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/tutorform">Join as a coach</NavLink>
      </div>
      :
      <>
      {/* <NavLink to="/dashboard">Dashboard</NavLink> */}
     <NavLink to="/logout">Logout</NavLink>
     </>
 }

      </div>

    </nav>
    </>
  )
}

export default Navbar;



