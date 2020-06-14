import React from 'react';

const About = () => {
    return (
        <div className='mt-5 pt-3 container'>
        <div className='row justify-content-center'>

          <div className="col-12 text-center">
            <h1>About</h1>
          </div>

          <div className="col-12 mt-3">
            <p>This is a WebApp made in React, it consumes the <a href="https://www.omdbapi.com/" target="_blank" rel="noopener noreferrer">OMDb API</a> to search movies/series with the name that user input in the search box.</p>
            <p>This tool is part of the Pedro Almeida portfolio. Please check my website in the footer section to contact me and/or see my other projects.</p>
          </div>

        </div>
      </div>
    );
}
 
export default About;