import React from 'react';

import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';

const Header = function() {
    return(
        <div>
            <nav className="navbar navbar-expand-lg fixed-top bg-dark">
               <DesktopHeader />
               <MobileHeader />
            </nav>
        </div>
    )};

export default Header;