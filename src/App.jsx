import Home from './components/Home'
import LogIn from './components/LogIn';
import './components/home.css'
import { useState } from 'react';


function App() {
  
  const[open,setOpen]=useState(0);

  return (
    <>
      <nav className="nav-bar">
          <div className="nav-icon">
              <span>C</span>hat

              <span>V</span>ibe

          </div>

      </nav>
      <Home OnLogin={setOpen}/>
      {open&&<LogIn open={open} OnLogin={setOpen}/>}
    </>

  );
}

export default App
