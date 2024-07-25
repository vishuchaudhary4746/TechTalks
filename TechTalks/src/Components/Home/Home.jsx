import React from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';

function App() {
  return (
    <div className="container">
      <h1 className='main-heading'>TechTalks</h1>
      <Navbar/>

      {/* <header className="header">
        
        <nav className="nav">
          <ul>
            <li>Design</li>
            <li>Film</li>
            <li>Advertising</li>
            <li>Photography</li>
            <li>Digital</li>
            <li>Podcasts</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
        <button className="subscribe">Subscribe</button>
      </header> */}
      <main className="main">
        <section className="hero">
          <h2>We are Creative80</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <button className="read-articles">Read Articles</button>
        </section>
      </main>
    </div>
  );
}

export default App;
