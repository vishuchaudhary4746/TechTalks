import './App.css';
import React from 'react';
import Home from '../src/Components/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login/Login.jsx';
import LatestBlog from './Pages/LatestBlog/LatestBlog.jsx';
import Startups from './Pages/Startups/Startup.jsx';

function App() {
  return (
    <Router>
      {/* <Home/> */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Latest' element={<LatestBlog/>}/>
        <Route path='/Startup' element={<Startups/>}/>
      </Routes>
    </Router>
  );
}

export default App;