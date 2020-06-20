import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React Playground with hooks and stuff. Slowly Redux will be added and it will be fun. Click below to enjoy.
        </p>
        <a href=" " onClick={() => {alert("In Progress")}}>
          In Progress
        </a>
      </header>
    </div>
  );
}

export default App;
