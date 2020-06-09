import React , {useState, useContext} from 'react';
import ListMoviesFounded from './ListMoviesFounded';
import { LightDarkModeContext } from '../contexts/LightDarkModeContext';

const SearchMovieForm = () => {
    const [nameToSearch, setNameToSearch] = useState("");
    const [finalNameToSearch, setFinalNameToSearch] = useState("");
    const { isDarkMode } = useContext(LightDarkModeContext);
    
    const handleSubmit = (e) => {
        e.preventDefault();        
        setNameToSearch("");
        setFinalNameToSearch(nameToSearch);
    }

    const handleChange = (e) => {
        setNameToSearch(e.target.value);
    }

    return ( 
        <div className='mt-5 pt-3 container'>
            <div className='row justify-content-center'>
                <div className="col-12">
                    <form onSubmit={handleSubmit} className="d-flex justify-content-center">
                        <div className="form-group">
                            <label className={`w-100 ${isDarkMode ? 'text-white' : ''}`}>Movie/Serie name to search</label>
                            <input type="text" value={nameToSearch} required onChange={handleChange}
                             className={`form-text w-100 text-center ${isDarkMode? 'text-white bg-dark' : ''} `}/>
                            
                            <input type="submit" value="Search" className={`my-2 w-100 btn ${isDarkMode? 'btn-dark' : 'btn-primary' }`}/>
                        </div>
                    </form>
                </div>
                
                <ListMoviesFounded name={finalNameToSearch} />
            </div>
        </div>
     );
}
 
export default SearchMovieForm;