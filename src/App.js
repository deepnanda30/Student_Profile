import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from './components/Body';

function App() {
  return (    
    <div className="App">
      <div className="row">
        <header className="rectangle"></header>
      </div> 
      <Body />    
    </div>
  );
}

export default App;
