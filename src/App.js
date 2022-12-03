import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Users from './pages/Users';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Rejestracja from './pages/Rejestracja';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/" element={<Users />}></Route>
        <Route path="/pricing" element={<Pricing />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/rejestracja" element={<Rejestracja />}></Route>
      </Routes>
    </div>
    
    </>
    
  )
    
}

export default App;