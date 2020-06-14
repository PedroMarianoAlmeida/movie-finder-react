import React , {useState, useContext} from 'react';
import { LightDarkModeContext } from '../../contexts/LightDarkModeContext';
import { NameToSearchContext } from '../../contexts/NameToSearchContext';

const SearchMovieForm = () => {
    const [nameToSearch, setLocalNameToSearch] = useState("");
    const [finalNameToSearch, setFinalNameToSearch] = useState("");
    const { isDarkMode } = useContext(LightDarkModeContext);
    const { newNameToSearch } = useContext(NameToSearchContext);
    
    const handleSubmit = (e) => {
        e.preventDefault();        
        setLocalNameToSearch("");
        console.log(nameToSearch);
        newNameToSearch(nameToSearch);
    }

    const handleChange = (e) => {
        setLocalNameToSearch(e.target.value);
    }

    return ( 
        
        <form onSubmit={handleSubmit} className="d-flex justify-content-center">
            <div className="form-group">
                <label className={`w-100 ${isDarkMode ? 'text-white' : ''}`}>Movie/Serie name to search</label>
                <input type="text" value={nameToSearch} required onChange={handleChange}
                className={`form-text w-100 text-center ${isDarkMode? 'text-white bg-dark' : ''} `}/>               
                <input type="submit" value="Search" className={`my-2 w-100 btn ${isDarkMode? 'btn-dark' : 'btn-primary' }`}/>
            </div>
        </form>      

     );
}
 
export default SearchMovieForm;