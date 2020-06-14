import React, {useState, createContext} from 'react';

export const NameToSearchContext = createContext();

const NameToSearchProvider = (props) => {
    
    const [nameToSearch, setNameToSearch] = useState("");

    const newNameToSearch = (name) => {
        setNameToSearch(name);
    }
    
    return (
        <NameToSearchContext.Provider value={ {nameToSearch, newNameToSearch} }>
            {props.children}
        </NameToSearchContext.Provider>
      );
}
 
export default NameToSearchProvider;