import React, { useContext } from 'react';
import { LightDarkModeContext } from './../contexts/LightDarkModeContext'

const ToggleLightDarkMode = () => {
    
    const { isDarkMode, toggleLightDarkMode } = useContext(LightDarkModeContext);
    
    const handleClick = () => {
        toggleLightDarkMode();
    }
    
    return ( 
        <button className={`nav-item nav-link mx-1 text-white align-middle btn ${isDarkMode? 'btn-dark' : 'btn-light'}`} onClick={handleClick}>
            Light Mode
        </button>
     );
}
 
export default ToggleLightDarkMode;