import logo from './logo.svg';
import './App.css';
import Modal from './lib/component/modal';
import { useState } from 'react';





function App() {
  const [show, setShow] = useState(false)
  const openModal=()=>setShow(true)
  const closeModal = ()=> setShow(false)
 
  return (

    <div className="App">       
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>      
        <button onClick={() => {
          openModal();   
         
        }}> Click</button><Modal show={show} close={closeModal}  text="L'employé a été correctement enregistré"  fontSize="17" showContainer="true"/>        
      </header>
    </div>
  );
}


export default App;
