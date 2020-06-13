import React from 'react';
import LightDarkModeProvider from './contexts/LightDarkModeContext';
import BodyApp from './components/BodyApp';

function App() {
  document.title = "Movie Finder"
  return (    
    <div className="App h-100">
      <LightDarkModeProvider>
        <BodyApp />
      </LightDarkModeProvider>    
    </div>
  );
}

export default App;
