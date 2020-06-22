import React from 'react';
import './App.css';
import InputElementUseState from './InputElementUseState';
import InputElementClass from './InputElementClass';
import ImageElementUseRef from './ImageElementUseRef';
import 'bootstrap';


function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-light" style={{ "backgroundColor": "#e3f2fd" }}>
        <p>
          Animesh Dwivedi says: Its just basic, but its helpfull.
        </p>
      </nav>
      <div className="container-fluid">
        <p>
          React Playground with hooks and stuff.
          </p>
        <div>
          <p>Below is an example of useState hook</p>
          <InputElementUseState />
          <p>Below is the equivalent Class Component</p>
          <InputElementClass />
          <p>Below is an example of useRef hook</p>
          <ImageElementUseRef />
        </div>

      </div>
    </div>
  );
}

export default App;
