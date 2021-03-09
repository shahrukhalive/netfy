import React from 'react'
import './Nav.css';


function Nav() {
    return (
        <div className="nav">
             <img
              className="nav_logo"
              src="https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg"
              alt="Netflix Logo"
            />

            <img
             className="nav__avatar"
             src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
             alt="Avatar"
            />
            
        </div>
    );
}

export default Nav
