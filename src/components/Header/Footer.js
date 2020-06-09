import React, {useContext} from 'react';
import { LightDarkModeContext } from '../../contexts/LightDarkModeContext';

const Footer = () => {

    const { isDarkMode } = useContext(LightDarkModeContext);

    return (
        <div className={`${isDarkMode? 'bg-dark' : 'bg-primary'} fixed-bottom text-center py-2`}>
            <a className="text-white" href="https://www.pedroprogrammer.com/" target="_blank">
                www.pedroprogrammer.com
            </a>
        </div>
      );
}
 
export default Footer;