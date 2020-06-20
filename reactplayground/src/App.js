import React from 'react';
import './App.css';
import InputElementUseState from './InputElementUseState';
import InputElementClass from './InputElementClass';

function App() {
  return (
    <div className="App">
      <header className="App-header">        
        <p>
          Animesh Dwivedi says: Its just basic, but its helpfull.
        </p>
        <p>
          React Playground with hooks and stuff.
        </p>
        <div>          
          <p>Below is an example of useState hook</p>
          <InputElementUseState />
          <p>Below is the equivalent Class Component</p>
          <InputElementClass />
        </div>        
        
      </header>
    </div>
  );
}

export default App;
