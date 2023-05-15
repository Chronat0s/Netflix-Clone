import React, { useState, useEffect }from 'react';
import "./Nav.css"

const Nav = () => {
    const [show, handleShow] = useState(false);

   useEffect(() => {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100){
            handleShow(true);
        } else handleShow(false);
    });
    return () => {
        window.removeEventListener("scroll", handleShow);
    }
   }, [])

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img 
              className="nav_logo"
              src="https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-1.png"
              alt="placeholder Logo"
            />
            <img 
              className="nav_avatar"
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              alt="Netflix Avatar"
            />
        </div>
    );
}

export default Nav;
