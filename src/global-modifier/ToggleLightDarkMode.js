import React, { useContext } from 'react';
import { LightDarkModeContext } from './../contexts/LightDarkModeContext'

const ToggleLightDarkMode = () => {
    
    const { isDarkMode, toggleLightDarkMode } = useContext(LightDarkModeContext);
    
    const handleClick = () => {
        toggleLightDarkMode();
    }
    
    return ( 
        <button className={`nav-item nav-link mx-1 align-middle btn ${isDarkMode? 'btn-secondary text-white' : 'btn-light'}`} onClick={handleClick}>
            {isDarkMode? 'Dark Mode' : 'Light Mode'}
        </button>
     );
}
 
export default ToggleLightDarkMode;