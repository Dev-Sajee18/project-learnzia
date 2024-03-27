
import React from 'react'
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useSelector } from 'react-redux';
import Cart from './Cart/Cart ';





const Navbar = (props) => {
  const { cart } = useSelector((state) => state.cart);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('UserInfo'));
    setIsLoggedIn(userInfo ? true : false);

  }, []);


  const handleLogout = () => {
    localStorage.removeItem('UserInfo');
    setIsLoggedIn(false);
    localStorage.removeItem("isAdmin")
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };



  return (
    <>
      <nav class="header" style={{ zIndex: "999" }}>
        <div class="navbar">
          <h2 class="logo" ><a href="/" style={{ color: "orange" }}>Learnzia</a></h2>
          <input type="checkbox" id="menu-toggle" />
          <label for="menu-toggle" id="hamburger-btn">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
              <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            </svg>
          </label>
          <ul class="links">
            <li><NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink></li>
            {/* <li><NavLink className="nav-link" to="/about">About</NavLink></li> */}
            <li><NavLink className="nav-link active" aria-current="page" to="/Service">Materials</NavLink></li>
            <li><NavLink className="nav-link active" aria-current="page" to="/Tutor">Tutors</NavLink></li>
            <li><NavLink to="/tutorform">Join as a coach</NavLink></li>
            {isAdmin && <li><NavLink to="/admin">Dashboard</NavLink></li>}

            {/* <li><NavLink className="nav-link active" aria-current="page" to="/Contact">Contact</NavLink></li> */}
            {!isLoggedIn ? (
              <li><NavLink className="getstarted scrollto running-border" to="/login">Login</NavLink></li>
            ) : (

              <li>

                <button onClick={toggleDropdown} style={{ height: "50px", width: "50px", borderRadius: "50%" }} className="running-border" ></button>
                {isDropdownOpen && (
                  <div className="dropdown-content">
                    <button className="getstarted scrollto running-border" >profile</button>
                    <button className="getstarted scrollto running-border" >sayhi</button>
                    <button className="getstarted scrollto running-border" onClick={handleLogout}>Logout</button>
                  </div>
                )}
              </li>
            )}

          </ul>

          {props.auth ?
            <div class="buttons">
            </div>
            
            :
            <>
              <NavLink to="/dashboard">Dashboard</NavLink>
              <NavLink to="/logout">Logout</NavLink>
            </>
          }
          <div style={{ position: 'relative', display: 'inline-block' }}>
      <AiOutlineShoppingCart
        size={35}
        color="rgb(255, 255, 255)"
        onClick={() => setOpenCart(true)}
        style={{ cursor: "pointer" }}
      />
      <span
        style={{
          position: "absolute",
          top: "-15px",
          right: "-5px",
          backgroundColor: "#dc3545",
          color: "#fff",
          padding: "2px 5px",
          borderRadius: "50%",
          fontSize: "12px",
        }}
      >
        {cart && cart.length}
      </span>
    </div>
          {openCart ? <Cart setOpenCart={setOpenCart} /> : null}


        </div>

      </nav>
    </>
  )
}

export default Navbar;



