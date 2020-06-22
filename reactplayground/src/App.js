import React from 'react';
import './App.css';
import InputElementUseState from './InputElementUseState';
import InputElementClass from './InputElementClass';
import ImageElementUseRef from './ImageElementUseRef';
import ImageElementClass from './ImageElementUseRef';
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
          <h5 className="mt-0">Input and useState</h5>
          <p>Below is an example of useState hook</p>
          <InputElementUseState />
          <p>Below is the equivalent Class Component</p>
          <InputElementClass />
          <h5 className="mt-0">Images and Refs</h5>
          <p>Below is an example of useRef hook</p>
          <ImageElementUseRef />
          <p>Below is an example of refs with class component</p>
          <ImageElementClass />
        </div>
        <p>What you learned: useState() allows you to manipulate the state of a react functional component just like setState function</p>
      </div>
    </div>
  );
}

export default App;
