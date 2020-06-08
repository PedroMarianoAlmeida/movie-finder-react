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
        <div className='mt-5 pt-3 container'>
            <div className='row justify-content-center'>
                <div className="col-12">
                    <form onSubmit={handleSubmit} className="d-flex justify-content-center">
                        <div className="form-group">
                            <label className="w-100">Movie/Serie name to search</label>
                            <input type="text" value={nameToSearch}
                            required onChange={handleChange} className="form-text w-100 text-center"/>
                            
                            <input type="submit" value="Search" className="my-2 w-100"/>
                        </div>
                    </form>
                </div>
                
                <ListMoviesFounded name={finalNameToSearch} />
            </div>
        </div>
     );
}
 
export default SearchMovieForm;