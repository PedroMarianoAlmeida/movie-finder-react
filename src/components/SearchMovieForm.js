import React , {useState} from 'react';
import ListMoviesFounded from './ListMoviesFounded';

const SearchMovieForm = () => {
    const [nameToSearch, setNameToSearch] = useState("");
    const [finalNameToSearch, setFinalNameToSearch] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();        
        setNameToSearch("");
        setFinalNameToSearch(nameToSearch);
    }

    const handleChange = (e) => {
        setNameToSearch(e.target.value);
    }

    return ( 
        <div className='mt-5 pt-3'>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Movie/Serie name to search</label>
                    <input type="text" placeholder="Name to search" value={nameToSearch}
                    required onChange={handleChange} className="form-text"/>
                    
                    <input type="submit" value="Search" />
                </div>
            </form>
            
            <ListMoviesFounded name={finalNameToSearch} />

        </div>
     );
}
 
export default SearchMovieForm;