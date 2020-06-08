import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';

const MobileHeader = function() {
    return(
        <div className="d-lg-none w-100 row justify-content-between">
            <div className='col-11'>
                <Link to="/" className="nav-item nav-link mx-1 text-white"> Movie Finder </Link>
            </div>
            <div className='col-1'>
                <NavDropdown id="navbarMenu" title="|||">
                    <NavDropdown.Item> <Link to="/" className="text-dark"> Home </Link> </NavDropdown.Item>
                    <NavDropdown.Item > <Link to="/about" className="text-dark">About</Link> </NavDropdown.Item>
                </NavDropdown>
            </div>
        </div>
    )
}

export default MobileHeader;