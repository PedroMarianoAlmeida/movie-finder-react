import React, {useContext} from 'react';
import { LightDarkModeContext } from './../../contexts/LightDarkModeContext';

import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';

const Header = function() {

    const { isDarkMode } = useContext(LightDarkModeContext);

    return(
        <div>
            <nav className={`navbar navbar-expand-lg fixed-top ${isDarkMode? 'bg-dark' : 'bg-primary'}`}>
               <DesktopHeader />
               <MobileHeader />
            </nav>
        </div>
    )};

export default Header;