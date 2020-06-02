import React , {useState} from 'react';

const SearchMovieForm = () => {
    const [nameToSearch, setNameToSearch] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nameToSearch);
        setNameToSearch("");
    } 

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name to search" value={nameToSearch}
                required onChange={ (e) => {setNameToSearch(e.target.value)}} />
                
                <input type="submit" value="Search" />
            </form>
        </div>
     );
}
 
export default SearchMovieForm;