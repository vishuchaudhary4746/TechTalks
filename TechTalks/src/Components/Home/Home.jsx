import React from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import WelcomePage from '../../Pages/Welcome/WelcomePage';
import Startups from '../../Pages/Startups/Startup';
import Footer from '../Footer/Footer';
import LatestBlogPage from '../../Pages/LatestBlog/LatestBlog';
// import {Link} from 'react-router-dom'

function Home() {
  return (
    <div className="container">
      <h1 className='main-heading'>TechTalks</h1>
      <Navbar/>
      <WelcomePage/>
      <LatestBlogPage/>
      <Startups/>
      
      <Footer/>
    </div>
  );
}

export default Home;
