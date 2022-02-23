import logo from './logo.svg';
import './App.css';
import Modal from './lib/component/modal';
import { useState } from 'react';





function App() {
  const [show, setShow] = useState(false)
 
  return (

    <div className="App">
       
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      
        <button onClick={() => {
          setShow(!show);
          console.log(show)
         
        }}> Click</button><Modal show={show} fontSize="17" showContainer="true"/>
        
      </header>
    </div>
  );
}


export default App;
