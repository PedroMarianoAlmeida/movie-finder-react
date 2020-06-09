import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';
import ToggleLightDarkMode from './../../global-modifier/ToggleLightDarkMode'

const MobileHeader = function() {
    return(
        <div className="d-lg-none w-100 row justify-content-between">
            <div className='col-10'>
                <Link to="/" className="nav-item nav-link mx-1 text-white"> Movie Finder </Link>
            </div>
            <div className='col-2'>
                <NavDropdown id="navbarMenu" title={<span className="text-white my-auto">|||</span>}>
                    <NavDropdown.Item> <ToggleLightDarkMode /> </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item> <Link to="/" className="text-dark"> Home </Link> </NavDropdown.Item>
                    <NavDropdown.Item > <Link to="/about" className="text-dark">About</Link> </NavDropdown.Item>
                </NavDropdown>
            </div>
        </div>
    )
}

export default MobileHeader;