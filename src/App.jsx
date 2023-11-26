import React from 'react'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Components
import NavBar from './components/NavBar/NavBar';
import Home from './page/Home';



function App() {


  return (
    <>
      
      <BrowserRouter>
        
        <NavBar />
          <Routes>
            <Route path='/'  element={<Home/>}/>
        </Routes>

      </BrowserRouter>
    
    </>
  );
}

export default App
