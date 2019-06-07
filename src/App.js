import React from 'react';
import './App.css';
import Messages from "./Messages"
import NavbarFun from './Components/Navbar';

function App() {
  return (
    <div className="App">
      
        <NavbarFun />     
        <Messages />  
    </div>
  );
}

export default App;
