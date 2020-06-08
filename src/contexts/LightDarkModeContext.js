import React, {useState, createContext} from 'react';

export const LightDarkModeContext = createContext();

const LightDarkModeProvider = (props) => {

    const [isDarkMode, setIsDarkMode] = useState(false);
    
    const toggleLightDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        console.log("Alterando modo")
    }


    return (
        <LightDarkModeContext.Provider value={ {isDarkMode , toggleLightDarkMode} }>
            {props.children}
        </LightDarkModeContext.Provider>
    );
}
 
export default LightDarkModeProvider;