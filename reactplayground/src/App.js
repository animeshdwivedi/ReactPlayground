import React from 'react';
import './App.css';
import InputElement from './InputElement';

function App() {
  return (
    <div className="App">
      <header className="App-header">        
        <p>
          React Playground with hooks and stuff. Slowly Redux will be added and it will be fun. Click below to enjoy.
        </p>
        <div>
          <p>Below is an example of useState hook</p>
          <InputElement />
        </div>        
        
      </header>
    </div>
  );
}

export default App;
