import React from 'react';
import {Link} from 'react-router-dom';
import ToggleLightDarkMode from './../../global-modifier/ToggleLightDarkMode'

const DesktopHeader = function() {
    return(
        <div className="d-none d-lg-flex flex-grow-1">
            <Link to="/" className="nav-item nav-link mx-1 text-white"> Movie Finder </Link>

            <div className="navbar-nav ml-auto align-items-center">
                <ToggleLightDarkMode />
                <Link to="/" className="nav-item nav-link mx-1 text-white"> Home </Link>
                <Link to="/about" className="nav-item nav-link mx-1 text-white">About</Link>
            </div>
        </div>      
    )
}

export default DesktopHeader;