import React, {useContext} from 'react';

import { LightDarkModeContext } from '../../contexts/LightDarkModeContext';
import { NameToSearchContext } from '../../contexts/NameToSearchContext';

const NewSearch = () => {

    const { isDarkMode } = useContext(LightDarkModeContext);
    const { newNameToSearch } = useContext(NameToSearchContext)

    const handleClick = () => newNameToSearch("")    

    return (
        <div className="justify-content-center text-center my-2">
            <div className={`d-block my-1 ${isDarkMode? "text-white" : '' }`}>Roll sides to choose a Film/serie</div>
            <div className={`d-block my-1 ${isDarkMode? "text-white" : '' }`}>Click it to see details </div>
            <div className="d-block">
                <button className={`btn ${isDarkMode? "btn-dark" : "btn-primary"}`} onClick={handleClick}>
                    New Search
                </button>
            </div>
        </div>
      );
}
 
export default NewSearch;