import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';

const MobileHeader = function() {
    return(
        <div className="d-lg-none w-100 row justify-content-between">
            <div className='col-4'>
                <Link to="/" className="nav-item nav-link mx-1 text-white"> Movie Finder </Link>
            </div>
            <div className='col-1'>
                <NavDropdown id="navbarMenu">
                    <NavDropdown.Item> <Link to="/" className="nav-item nav-link mx-1 text-white"> Home </Link> </NavDropdown.Item>
                    <NavDropdown.Item > <Link to="/about" className="nav-item nav-link mx-1 text-white">About</Link> </NavDropdown.Item>
                </NavDropdown>
            </div>
        </div>
    )
}

export default MobileHeader;