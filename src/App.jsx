import React from 'react'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Components
import NavBar from './components/NavBar/NavBar';



function App() {


  return (
    <>
      
      <BrowserRouter>
        
        <NavBar />
          <Routes>
            {/* <Route path='/'  element={}/> */}
          <p>Cleaning project</p>
        </Routes>

      </BrowserRouter>
    
    </>
  );
}

export default App
