import {useState, useEffect} from 'react';

const useFetch = (configurationParam) => {
    const [configuration, setConfiguration] = useState(configurationParam);
    const [ answer, setAnswer ] = useState(null);

    const fullAdress = (url, searchParams) => {
        let queryParams = "";
    
        searchParams.map( (param, index) => {
            const key = Object.keys(param)[0];
            queryParams += `${key}=${param[key]}`;
            if(index < searchParams.length - 1) queryParams += '&';
            return ""; //Without this presents a warning, and when I changed the "map" for "foreach" doesn't work                         
        });
    
        return url + queryParams;
    }   
    
    useEffect(() => {
        let shouldRun;
        const checkingUserInput = () => {
            const configurationCopy = {...configuration};
            const keys = Object.keys(configurationCopy);
            if( !keys.includes("shouldRun") ) {
                shouldRun = true;
            }
            else{
                shouldRun = configuration.shouldRun;
            }          
            
            if( !keys.includes("url") ){
                console.log("URL property is obligatory, this HOOK is inactive");
                shouldRun = false;
            }            

            if( !keys.includes("logResponses") ) configurationCopy.logResponses = true;

            if( !keys.includes("doWhenInactive") ) configurationCopy.doWhenInactive = "";
            if( !keys.includes("doWhenFetching") ) configurationCopy.doWhenFetching = "";
            if( !keys.includes("doWhenSuccess") ) {
                configurationCopy.doWhenSuccess = "";
                console.log("Your hook doesn't return a value after fetching, all the informations will be in console.log");
                configurationCopy.logResponses = true;
            }
            if( !keys.includes("doWhenFail") ) configurationCopy.doWhenFail = "";

            if( keys.includes("parameters") ) {
                if ( !Array.isArray( configurationCopy.parameters ) ) {
                    console.log("The parameters propriety should be an array (with each parameter in a {key: value} object). This HOOK is inactive");
                    shouldRun = false;
                }
                else{
                    for(let param of configurationCopy.parameters) {
                        if (typeof param != "object") {
                            console.log("The parameter in parameters Array properties should be a {key: value} object. This HOOK is inactive");
                            shouldRun = false;
                        }
                        else if(Object.keys(param).length !== 1) {
                            console.log("The parameter in parameters Array properties should be a {key: value} object (only one propriety in Object). This HOOK is inactive");
                            shouldRun = false;
                        }
                    }
                }
            }

            if( JSON.stringify(configuration) !== JSON.stringify(configurationCopy) ) setConfiguration(configurationCopy)
        }

        const getAnswerFetch = async () => {
            if (configuration.logResponses) console.log("Status: Fetching");
            setAnswer(configuration.doWhenFetching);
            let result; 
            let customizeError = false;
            try{
                const adress = fullAdress(configuration.url, configuration.parameters);
                if (configuration.logResponses) console.log( "Adress fetching: ", adress );
                let response = await fetch( adress );
                if(!response.ok) throw Error(response.statusText);
    
                result = await response.json();
                
                if(result[configuration.errorAPIvalue[0]] === configuration.errorAPIvalue[1] ) {
                    customizeError = true;
                    console.log("Customize Error: ", result[configuration.errorAPIvalue[2]])
                    setAnswer( configuration.doWhenFail( result ) );
                    throw Error();                    
                }

                if (configuration.logResponses) {
                    console.log( "Raw Fetch: ", result );
                    console.log( "Staus: Sucess");
                } 
                
                setAnswer( configuration.doWhenSuccess( result ) );
            }
            catch (err){                                 
                if (!customizeError) {
                    if (configuration.logResponses) {
                        console.log( "Fetch error: ", err.message );
                        console.log( "Staus: Fail");
                    }    
                    setAnswer( configuration.doWhenFail( err ) );
                }                  
            }      
          }

        checkingUserInput();
        if ( shouldRun ) getAnswerFetch(); //Using the variable shouldRun inside configuration param (and set the configuration with this new information in checkingUserInput) won't work
        else {
            if (configuration.logResponses) console.log("Status: Inactive");
            setAnswer( configuration.doWhenInactive() );
        }
        
    }, [ configuration ]);

    return [ answer, setConfiguration ];
}

export default useFetch;