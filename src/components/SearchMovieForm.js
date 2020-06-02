import React , {useState} from 'react';
import ListMoviesFounded from './ListMoviesFounded';

const SearchMovieForm = () => {
    const [nameToSearch, setNameToSearch] = useState("");
    const [finalNameToSearch, setFinalNameToSearch] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nameToSearch);
        setNameToSearch("");
        setFinalNameToSearch(nameToSearch);
    }

    const handleChange = (e) => {
        setNameToSearch(e.target.value);
    }

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name to search" value={nameToSearch}
                required onChange={handleChange} />
                
                <input type="submit" value="Search" />
            </form>
            
            <ListMoviesFounded name={finalNameToSearch} />

        </div>
     );
}
 
export default SearchMovieForm;